import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,    
    TouchableOpacity,
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
            <ScrollView contentContainerStyle={styles.container}>
                {    
                <FlatList
                    data={[
                        {"name":"Nome dos clientes, categoria do produto análise e  com Cavalcante no nome que foram atendidos por um técnico com Dias no nome e que possuem 3 produtos de análise ou mais cadastrados.",
                        "id":  10},
                        {"name":"nome completo e telefone de todos os usuarios que tenham ‘Cavalcante’ no nome",
                        "id":  11}
                        ]}
                    renderItem={
                        ({item}) =>
                            <View style={[theme.cardStyle, styles.card]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Actions.TelaTemporaria(item)
                                    }}
                                >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                />
                }
            </ScrollView>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    card: {
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 7,
        elevation: 3
    }
});