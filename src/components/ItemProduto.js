import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { COLORS } from '@constants';

export default class ItemProduto extends Component{
    render(){
        const { nome, preco, descricao, categoria, quantidade } = this.props;
        return (
            <View>
                <View style={styles.top}>
                    <View style={{flex: 3}}>
                        <Text style={styles.txtNome}>{nome}</Text>
                        <Text style={styles.txtDescricao}>{descricao}</Text>
                        <Text>Quantidade: {quantidade}</Text>
                        <Text style={{ marginTop: 10 }}>Categoria: {categoria}</Text>
                    </View>
                    <View style={{flex: 1}}>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtPreco}>R$ {parseFloat(preco).toFixed(2).replace('.', ',')}</Text>
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
        fontSize: 12,
    },
    txtPreco: {
        fontSize: 14.5,
        fontWeight: 'bold',
        color: '#009688'
    },
    top: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    bottom: {
        borderTopWidth: 0.4,
        borderColor: COLORS.divider,
        padding: 3
    }
});