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
import { listar } from '@api/temp';

import { COLORS } from '@constants';

const {width,  height} = Dimensions.get('window');
const theme = getTheme();
const fabSize = Math.min(width, height)/8

export default class TelaTemporaria extends Component{
    state = {
        data: [],
        isLoading: false,
        width,
        height
    };

    fetch(){
        this.setState({ isLoading: true });
        listar(this.props.id)
            .then(response => {
                response.json()
                    .then(data => {
                        if(data){
                            this.setState({
                                data: data,
                                isLoading: false,
                                shouldFetch: false
                            });
                        }
                    })
            })
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.shouldFetch){
            this.fetch();
        }
    }

    componentDidMount(){
        this.fetch();
    }

    render(){
        const id = this.props.id
        return(
            <ScrollView contentContainerStyle={styles.container}>
                {
                    <FlatList
                        data={this.state.data}
                        renderItem={
                            ({item}) =>
                                <View style={[theme.cardStyle, styles.card]}>
                                        <Text>{JSON.stringify(item)}</Text>
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