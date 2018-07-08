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
import { cadastrarUsuario } from '@api/usuarios'
import { COLORS } from '@constants';

const theme = getTheme();

export default class CadastroUsuario extends Component{

    state = {
        usuario: {
            email: '', 
            senha: '', 
            nome_completo: ''
        },
        errors: {},
        isLoading: false
    }

    cadastrar(){
        const usuario = this.state.usuario;
        this.setState({isLoading:true});
        cadastrarUsuario(this.state.usuario)
            .then(response => {
                if(response.status == '200'){
                    this.setState({ isLoading: false });
                    Alert.alert('Sucesso', `${usuario.nome_completo} foi cadastrado com sucesso!`);
                    Actions.TelaInicial();
                } else {
                    Alert.alert('Erro', `Ocorreu um erro ao cadastrar ${usuario.nome_completo}.`);
                    this.setState({ isLoading: false });
                }
            })
    }

    render(){
        const { usuario, errors, isLoading } = this.state;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='email' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Email'
                            value={usuario.email}
                            error={errors.email}
                            onChangeText={ text => {
                                this.setState({ usuario: { ...usuario, email:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='info-with-circle' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Nome completo'
                            value={usuario.nome_completo}
                            error={errors.nome_completo}
                            onChangeText={ text => {
                                this.setState({ usuario: { ...usuario, nome_completo:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='key' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Senha'
                            value={usuario.senha}
                            error={errors.senha}
                            onChangeText={ text => {
                                this.setState({ usuario: { ...usuario, senha:text }})
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