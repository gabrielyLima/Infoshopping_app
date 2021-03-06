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

import { COLORS } from '@constants';

const {width,  height} = Dimensions.get('window');
const theme = getTheme();
const fabSize = Math.min(width, height)/8

export default class OpcaoConsultaServico extends Component{

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                {
                    <FlatList
                        data={[
                            {"name":"Valor total medio adquirido por dia num mês",
                                "id":  7},
                            {"name":"Valor medio adquirido no dia",
                                "id":  8},
                            {"name":"Descrição das análises com status ‘pendente’ e o id do funcionário responsável",
                                "id":  9}, 
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