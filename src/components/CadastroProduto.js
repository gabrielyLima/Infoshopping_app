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
import { cadastrarProduto } from '@api/produtos'
import { COLORS } from '@constants';

const theme = getTheme();

export default class CadastroProduto extends Component{

    state = {
        produto: {
            nome: '',
            categoria: '',
            preco: '',
            descricao: '',
            quantidade: '',
            codigo_barras: ''
        },
        errors: {},
        isLoading: false
    }

    cadastrar(){
        const produto = this.state.produto;
        this.setState({isLoading:true});
        cadastrarProduto(this.state.produto)
            .then(response => {
                if(response.status == '200'){
                    this.setState({ isLoading: false });
                    Alert.alert('Sucesso', `${produto.nome} foi cadastrado com sucesso!`);
                    Actions.TelaInicial();
                } else {
                    Alert.alert('Erro', `Ocorreu um erro ao cadastrar ${produto.nome}.`);
                    this.setState({ isLoading: false });
                }
            })
    }

    render(){
        const { produto, errors, isLoading } = this.state;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <MIcon style={styles.icon} name='text-format' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Nome'
                            value={produto.nome}
                            error={errors.nome}
                            onChangeText={ text => {
                                this.setState({ produto: { ...produto, nome:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MCIcon style={styles.icon} name='barcode' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Código de Barras'
                            value={produto.codigo_barras}
                            error={errors.codigo_barras}
                            onChangeText={ text => {
                                this.setState({ produto: { ...produto, codigo_barras:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <EntIcon style={styles.icon} name='price-tag' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Preço'
                            value={produto.preco}
                            error={errors.preco}
                            onChangeText={ text => {
                                this.setState({ produto: { ...produto, preco:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MCIcon style={styles.icon} name='group' size={25} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Categoria'
                            value={produto.categoria}
                            error={errors.categoria}
                            onChangeText={ text => {
                                this.setState({ produto: { ...produto, categoria:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MCIcon style={styles.icon} name='sort-numeric' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Quantidade'
                            value={produto.quantidade}
                            error={errors.quantidade}
                            onChangeText={ text => {
                                this.setState({ produto: { ...produto, quantidade:text }})
                            }}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <MIcon style={styles.icon} name='description' size={30} color='#757575'/>
                    <View style={styles.textField}>
                        <TextField
                            label='Descrição'
                            value={produto.descricao}
                            error={errors.descricao}
                            onChangeText={ text => {
                                this.setState({ produto: { ...produto, descricao:text }})
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