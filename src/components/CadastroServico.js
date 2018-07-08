import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Alert
} from 'react-native';

import {
    getTheme,
    MKSpinner,
    MKButton,
    MKColor
  } from 'react-native-material-kit';
import { Actions } from 'react-native-router-flux';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntIcon from 'react-native-vector-icons/Entypo';
import { TextField } from 'react-native-material-textfield';
import { realizarServico } from '@api/servicos'
import { COLORS } from '@constants';

const theme = getTheme();

export default class CadastroServico extends Component{

    state = {
        servico: {
            id_cliente: '', 
            id_funcionario: '',
            valor: ''
        },
        errors: {},
        isLoading: false
    }

    cadastrar(){
        const servico = this.state.servico;
        this.setState({isLoading:true});
        realizarServico(this.state.servico)
            .then(response => {
                if(response.status == '200'){
                    this.setState({ isLoading: false });
                    Alert.alert('Sucesso', `o servico de ${servico.id_funcionario} foi cadastrado com sucesso!`);
                    Actions.TelaInicial();
                } else {
                    Alert.alert('Erro', `Ocorreu um erro ao cadastrar o servico de ${servico.id_funcionario}.`);
                    this.setState({ isLoading: false });
                }
            })
    }

    render(){
        const { servico, errors, isLoading } = this.state;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <MIcon style={styles.icon} name='text-format' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Id do cliente'
                            value={servico.id_cliente}
                            error={errors.id_cliente}
                            onChangeText={ text => {
                                this.setState({ servico: { ...servico, id_cliente:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MCIcon style={styles.icon} name='barcode' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Id do funcionario'
                            value={servico.id_funcionario}
                            error={errors.id_funcionario}
                            onChangeText={ text => {
                                this.setState({ servico: { ...servico, id_funcionario:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='price-tag' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Valor'
                            value={servico.valor}
                            error={errors.valor}
                            onChangeText={ text => {
                                this.setState({ servico: { ...servico, valor:text }})
                            }}
                        />
                    </View>
                </View>
                {   isLoading?
                    <MKSpinner  style={{ alignSelf: 'center', margin: 30 }}/>
                    :
                    <MKButton
                        backgroundColor={MKColor.Teal}
                        elevation={4}
                        style={{ borderRadius: 2, margin: 30, padding: 10, alignItems: 'center'}}
                        onPress={() => {
                            this.cadastrar();
                        }}
                    >
                        <Text pointerEvents="none"
                                style={{color: 'white', fontWeight: 'bold',}}>
                            CADASTRAR
                        </Text>
                    </MKButton>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        backgroundColor: 'white',
    },
    textField: {
        flex: 1,
        paddingHorizontal: 15
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 5
    },
    icon: {
        alignSelf: 'flex-end',
        marginRight: 5
    }
});