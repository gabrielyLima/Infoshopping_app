import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Dimensions
} from 'react-native';

import {
    getTheme,
    MKSpinner,
    MKButton,
    MKColor
  } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { listarServicos } from '@api/servicos';
import ItemServico from '@components/ItemServico';

import { COLORS } from '@constants';

const {width,  height} = Dimensions.get('window');
const theme = getTheme();
const fabSize = Math.min(width, height)/8

export default class TabServicos extends Component{

    state = {
        servicos: [],
        isLoading: false,
        width,
        height
    };

    constructor(props){
        super(props);
        Dimensions.addEventListener('change', () => {
            const {width,  height} = Dimensions.get('window');
            this.setState({ width, height });
        });
    }

    fetchServicos(){
        this.setState({ isLoading: true });
        listarServicos()
            .then(response => {
                response.json()
                    .then(data => {
                        if(data){
                            this.setState({
                                servicos: data,
                                isLoading: false,
                                shouldFetch: false
                            });
                        }
                    })
            })
    }

    componentWillReceiveProps = (nextProps) => {
      if(nextProps.shouldFetch){
          this.fetchServicos();
      }
    }
    

    componentDidMount(){
        this.fetchServicos();
    }

    renderItem({item, index}){
        return (
            <View style={[theme.cardStyle, styles.card]}>
                <ItemServico {...item} />
            </View>
        )
    }

    render(){
        const { width, height } = this.state;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {
                    this.state.isLoading?
                    <MKSpinner  style={{ alignSelf: 'center', margin: 30 }}/>
                    :
                    <FlatList
                        renderItem={this.renderItem}
                        data={this.state.servicos}
                    />
                }
                <MKButton
                    style={styles.addFAB}
                    backgroundColor={MKColor.Amber}
                    fab={true}
                    elevation={10}
                    onPress={() => {
                        Actions.CadastroServico();
                    }}
                    width={60}
                    height={60}
                >
                <Icon name='add' size={30} color='white'/>
                </MKButton>
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
    },
    addFAB: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 30,
        bottom: 30
    }
});