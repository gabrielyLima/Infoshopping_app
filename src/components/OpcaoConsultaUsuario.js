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

export default class OpcaoConsultaUsuario extends Component{

    render(){
        return(
            // Nome dos clientes, categoria do produto análise e  com Cavalcante no nome que foram atendidos por um técnico com Dias no nome e que possuem 3 produtos de análise ou mais cadastrados.
            // nome completo e telefone de todos os usuarios que tenham ‘Cavalcante’ no nome
            <Text>{'aqui deverá ter uma lista de consultas'}</Text>
        )
    }
} 