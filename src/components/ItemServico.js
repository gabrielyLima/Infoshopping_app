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

import { removerServico } from '@api/servicos';
import { COLORS } from '@constants';

export default class ItemServico extends Component{

    remover(){
        const { id_servico, id_funcionario } = this.props;
        Alert.alert(
            'Remover servico',
            `Deseja remover o servico feito pelo funcionario ${id_funcionario}?`,
            [
              {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
              {text: 'Sim', onPress: () => {
                  removerServico(id_servico)
                    .then(response => {
                        if(response.status == '200'){
                            Alert.alert('Sucesso', 'servico removido com sucesso!');
                            setTimeout(() => {
                                Actions.refresh({shouldFetch: true});
                            }, 1000);
                        } else {
                            Alert.alert('Erro', 'Ocorreu um erro ao remover o servico.');
                        }
                    })
                }},
            ],
            { cancelable: false }
          )
    }

    render(){
        const { id_servico, dataHora, valor, id_funcionario, id_cliente } = this.props;
        return (
            <View>
                <View style={styles.top}>
                    <View style={{flex: 3}}>
                        <Text style={styles.txtNome}>
                            {id_funcionario} <Text style={{fontWeight:'normal', fontSize: 13}}>({id_cliente})</Text>
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                    </View>
                    {/* TODO */}
                    <Text style={{fontStyle:'italic'}}>{dataHora}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtPreco}>R$ {parseFloat(valor).toFixed(2).replace('.', ',')}</Text>
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