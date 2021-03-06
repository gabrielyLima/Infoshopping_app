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

import { removerFuncionario } from '@api/funcionarios';
import { COLORS } from '@constants';

export default class ItemFuncionario extends Component{

    remover(){
        const { id_funcionario } = this.props;
        Alert.alert(
            'Remover funcionario',
            `Deseja remover ${id_funcionario}?`,
            [
              {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
              {text: 'Sim', onPress: () => {
                  removerFuncionario(id_funcionario)
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
        const { id_funcionario, RG, CPF, conta_banco, agencia_bancaria, meta, tipo_funcionario } = this.props;
        return (
            <View>
                <View style={styles.top}>
                    <View style={{flex: 3}}>
                        <Text style={styles.txtNome}>
                            {CPF} <Text style={{fontWeight:'normal', fontSize: 13}}>({id_funcionario})</Text>
                        </Text>
                        <Text style={styles.txtDescricao}>{tipo_funcionario}</Text>
                    </View>
                    <View style={{flex: 1}}>
                    </View>
                    <Text style={{fontStyle:'italic'}}>{meta}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtNome}>{RG}</Text>
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