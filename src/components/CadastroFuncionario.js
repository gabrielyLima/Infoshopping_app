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
import { cadastrarFuncionario } from '@api/funcionarios'
import { COLORS } from '@constants';

const theme = getTheme();

export default class CadastroFuncionario extends Component{

    state = {
        funcionario: {
            id_funcionario: '',
            RG: '',
            CPF: '',
            conta_banco: '',
            agencia_bancaria: '',
            meta: '', 
            tipo_funcionario: ''
        },
        errors: {},
        isLoading: false
    }

    cadastrar(){
        const funcionario = this.state.funcionario;
        this.setState({isLoading:true});
        cadastrarFuncionario(this.state.funcionario)
            .then(response => {
                if(response.status == '200'){
                    this.setState({ isLoading: false });
                    Alert.alert('Sucesso', `${funcionario.id_funcionario} foi cadastrado com sucesso!`);
                    Actions.TelaInicial();
                } else {
                    Alert.alert('Erro', `Ocorreu um erro ao cadastrar ${funcionario.id_funcionario}.`);
                    this.setState({ isLoading: false });
                }
            })
    }

    render(){
        const { funcionario, errors, isLoading } = this.state;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='key' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Id do Funcionario'
                            value={funcionario.id_funcionario}
                            error={errors.id_funcionario}
                            onChangeText={ text => {
                                this.setState({ funcionario: { ...funcionario, id_funcionario:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='info-with-circle' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='RG'
                            value={funcionario.RG}
                            error={errors.RG}
                            onChangeText={ text => {
                                this.setState({ funcionario: { ...funcionario, RG:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='info-with-circle' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='CPF'
                            value={funcionario.CPF}
                            error={errors.CPF}
                            onChangeText={ text => {
                                this.setState({ funcionario: { ...funcionario, CPF:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MCIcon style={styles.icon} name='bank' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Conta de banco'
                            value={funcionario.conta_banco}
                            error={errors.conta_banco}
                            onChangeText={ text => {
                                this.setState({ funcionario: { ...funcionario, conta_banco:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MCIcon style={styles.icon} name='bank' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Agência bancaria'
                            value={funcionario.agencia_bancaria}
                            error={errors.agencia_bancaria}
                            onChangeText={ text => {
                                this.setState({ funcionario: { ...funcionario, agencia_bancaria:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MIcon style={styles.icon} name='attach-money' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Meta'
                            value={funcionario.meta}
                            error={errors.meta}
                            onChangeText={ text => {
                                this.setState({ funcionario: { ...funcionario, meta:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MIcon style={styles.icon} name='group' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Tipo de funcionario'
                            value={funcionario.tipo_funcionario}
                            error={errors.tipo_funcionario}
                            onChangeText={ text => {
                                this.setState({ funcionario: { ...funcionario, tipo_funcionario:text }})
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