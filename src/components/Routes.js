import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import TelaInicial from '@components/TelaInicial';
import CadastroProduto from '@components/CadastroProduto';
import { COLORS } from '@constants';

export default () => (
    <Router
        navigationBarStyle={{ backgroundColor: COLORS.primaryColor, elevation: 0}}
        titleStyle={{ color: '#FFFFFF'}}
        headerTintColor="#fff"
    >
        <Stack>
            <Scene component={TelaInicial} title="InfoShopping App" key="TelaInicial"/>
            <Scene component={CadastroProduto} title="Cadastrar Produto" key="CadastroProduto" />
        </Stack>
    </Router>
)