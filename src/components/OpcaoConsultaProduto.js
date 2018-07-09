import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Dimensions,
    Alert
} from 'react-native';

import {
    getTheme,
    MKSpinner,
    MKButton,
    MKColor
  } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { listarProdutos } from '@api/produtos';
import ItemProduto from '@components/ItemProduto';

import { COLORS } from '@constants';

const {width,  height} = Dimensions.get('window');
const theme = getTheme();
const fabSize = Math.min(width, height)/8

export default class OpcaoConsultaProduto extends Component{

    render(){
        return(
            // Nome e descrição dos produtos que não possuem ‘desmontavel’ na descrição
            // Nome e preço dos produtos que tenham preço entre R$5,00 e R$40,00
            // Quantidade de produtos vendidos por categoria
            <Text>{'aqui deverá ter uma lista de consultas'}</Text>
        )
    }
} 