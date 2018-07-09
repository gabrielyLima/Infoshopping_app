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

export default class OpcaoConsultaFuncionario extends Component{

    render(){
        return(
            // Lista salário que sejam maiores que 1100 (com comissão) e ordenados pelo nome do funcionário.
            // horários de serviços futuros, agendados, para técnicos
            // Comissão por funcionário
            <Text>{'aqui deverá ter uma lista de consultas'}</Text>
        )
    }
} 