import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView
} from 'react-native';

import {
    getTheme,
  } from 'react-native-material-kit';
import { listarProdutos } from '@api/produtos';

import { COLORS } from '@constants';

const theme = getTheme();
export default class TabProdutos extends Component{

    state = {
        products: []
    }

    componentDidMount(){
        listarProdutos()
            .then(response => {
                response.json()
                    .then(data => {
                        if(data){
                            this.setState({ products: data });
                        }
                    })
            })
    }

    renderItem({item, index}){
        return (
            <View style={[theme.cardStyle, styles.productItem]}>
                <View>
                    <Text>{item.nome}</Text>
                    <Text>R$ {parseFloat(item.preco).toFixed(2).replace('.', ',')}</Text>
                </View>
                <View>
                </View>
            </View>
        )
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    renderItem={this.renderItem}
                    data={this.state.products}
                />
            </ScrollView>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: COLORS.background
    },
    productItem: {
        marginVertical: 5,
        padding: 5
    }
});