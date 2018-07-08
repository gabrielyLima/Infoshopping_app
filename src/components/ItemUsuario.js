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

import { removerUsuario } from '@api/usuarios';
import { COLORS } from '@constants';

export default class ItemUsuario extends Component{

    remover(){
        const { email, nome_completo } = this.props;
        Alert.alert(
            'Remover Usuario',
            `Deseja remover o usuario ${nome_completo}?`,
            [
              {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
              {text: 'Sim', onPress: () => {
                  removerUsuario(email)
                    .then(response => {
                        if(response.status == '200'){
                            Alert.alert('Sucesso', 'usuario removido com sucesso!');
                            setTimeout(() => {
                                Actions.refresh({shouldFetch: true});
                            }, 1000);
                        } else {
                            Alert.alert('Erro', 'Ocorreu um erro ao remover o usuario.');
                        }
                    })
                }},
            ],
            { cancelable: false }
          )
    }

    render(){
        const { email, senha, nome_completo } = this.props;
        return (
            <View>
                <View style={styles.top}>
                    <View style={{flex: 3}}>
                        <Text style={styles.txtNome}>
                            {nome_completo}
                        </Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtDescricao}>{email}</Text>
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