import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';

import {
    getTheme,
    MKSpinner,
    MKButton,
    MKColor
  } from 'react-native-material-kit';

import { COLORS } from '@constants';

const theme = getTheme();

export default class CadastroProduto extends Component{

    state = {
        nome: '',
        categoria: '',
        preco: '',
        descricao: '',
        quantidade: '',
        codigo_barras: ''
    }

    cadastrar(){
        
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <TextInput
                    placeholder="Nome"
                    underlineColorAndroid={COLORS.darkerPrimaryColor}
                    style={styles.textInput}
                    value={this.state.nome}
                    onChangeText={text => {
                        this.setState({nome: text})
                    }}
                />
                <TextInput
                    placeholder="Categoria"
                    underlineColorAndroid={COLORS.darkerPrimaryColor}
                    style={styles.textInput}
                    value={this.state.categoria}
                    onChangeText={text => {
                        this.setState({categoria: text})
                    }}
                />
                <TextInput
                    placeholder="Preço"
                    underlineColorAndroid={COLORS.darkerPrimaryColor}
                    style={styles.textInput}
                    value={this.state.preco}
                    onChangeText={text => {
                        this.setState({preco: text})
                    }}
                />
                <TextInput
                    placeholder="Quantidade"
                    underlineColorAndroid={COLORS.darkerPrimaryColor}
                    style={styles.textInput}
                    value={this.state.quantidade}
                    onChangeText={text => {
                        this.setState({quantidade: text})
                    }}
                />
                <TextInput
                    placeholder="Código de Barras"
                    underlineColorAndroid={COLORS.darkerPrimaryColor}
                    style={styles.textInput}
                    value={this.state.codigo_barras}
                    onChangeText={text => {
                        this.setState({codigo_barras: text})
                    }}
                />
                <TextInput
                    placeholder="Descrição"
                    underlineColorAndroid={COLORS.darkerPrimaryColor}
                    style={styles.textInput}
                    value={this.state.descricao}
                    onChangeText={text => {
                        this.setState({descricao: text})
                    }}
                />
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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.background,
    },
    textInput: {
        marginBottom: 10
    }
});