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

export default class OpcaoConsultaFuncionario extends Component{

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                {    
                <FlatList
                    data={[
                        {"name":"Lista salário que sejam maiores que 1100 (com comissão) e ordenados pelo nome do funcionário.",
                            "id":  1},
                        {"name":"horários de serviços futuros, agendados, para técnicos",
                            "id":  2},
                        {"name":"Comissão por funcionário",
                            "id":  3}
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