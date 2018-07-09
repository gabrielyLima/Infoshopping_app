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

export default class OpcaoConsultaProduto extends Component{

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                {    
                <FlatList
                    data={[
                        {"name":"Nome e descrição dos produtos que não possuem ‘desmontavel’ na descrição",
                        "id":  4},
                        {"name":"Nome e preço dos produtos que tenham preço entre R$5,00 e R$40,00",
                        "id":  5},
                        {"name":"Quantidade de produtos vendidos por categoria",
                        "id":  6}
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