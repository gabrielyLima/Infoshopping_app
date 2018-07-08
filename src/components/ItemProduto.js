import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FIcon from 'react-native-vector-icons/Foundation';

import { removerProduto } from '@api/produtos';
import { COLORS } from '@constants';

export default class ItemProduto extends Component{

    remover(){
        const { codigo_barras, nome } = this.props;
        Alert.alert(
            'Remover Produto',
            `Deseja remover ${nome}?`,
            [
              {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
              {text: 'Sim', onPress: () => {
                  removerProduto(codigo_barras)
                    .then(response => {
                        if(response.status == '200'){
                            Alert.alert('Sucesso', 'Produto removido com sucesso!');
                            setTimeout(() => {
                                Actions.refresh({shouldFetch: true});
                            }, 1000);
                        } else {
                            Alert.alert('Erro', 'Ocorreu um erro ao remover o produto.');
                        }
                    })
                }},
            ],
            { cancelable: false }
          )
    }

    render(){
        const { nome, preco, descricao, categoria, quantidade } = this.props;
        return (
            <View>
                <View style={styles.top}>
                    <View style={{flex: 3}}>
                        <Text style={styles.txtNome}>
                            {nome} <Text style={{fontWeight:'normal', fontSize: 13}}>({quantidade})</Text>
                        </Text>
                        <Text style={styles.txtDescricao}>{descricao}</Text>
                    </View>
                    <View style={{flex: 1}}>
                    </View>
                    <Text style={{fontStyle:'italic'}}>{categoria}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtPreco}>R$ {parseFloat(preco).toFixed(2).replace('.', ',')}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.remover();
                        }}
                    >
                    <FIcon style={styles.icon} name='trash' size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    txtNome: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    txtDescricao: {
        fontSize: 14,
        marginTop: 3
    },
    txtPreco: {
        fontSize: 14.5,
        fontWeight: 'bold',
        color: '#009688'
    },
    top: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingHorizontal: 5
    },
    bottom: {
        flexDirection: 'row',
        borderTopWidth: 0.4,
        justifyContent: 'space-between',
        borderColor: COLORS.divider,
        paddingTop: 7,
        paddingHorizontal: 5
    }
});