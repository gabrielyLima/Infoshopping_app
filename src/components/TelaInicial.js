import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import MaterialTabs from 'react-native-material-tabs';
import TabProdutos from '@components/TabProdutos';
import { COLORS } from '@constants';

const tabs = [
    <TabProdutos />
]
export default class TelaInicial extends Component{
    
    state = {
        selectedTab: 0,
    };

    setTab = selectedTab => {
        this.setState({ selectedTab });
    };

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={COLORS.darkerPrimaryColor}/>
                <MaterialTabs
                    items={['Produtos', 'Clientes', 'Serviços', 'Funcionários']}
                    selectedIndex={this.state.selectedTab}
                    onChange={this.setTab}
                    barColor={COLORS.primaryColor}
                    indicatorColor="#fffe94"
                    activeTextColor="white"
                    scrollable={true}
                />
                {
                    tabs[this.state.selectedTab]
                }
            </SafeAreaView>
        )
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});