import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import TelaInicial from '@components/TelaInicial';
import { COLORS } from '@constants';

export default () => (
    <Router
        navigationBarStyle={{ backgroundColor: COLORS.primaryColor, elevation: 0}}
        titleStyle={{ color: '#FFFFFF'}}
        barButtonTextStyle={{ color: '#FFFFFF'}}
    >
        <Stack>
            <Scene component={TelaInicial} title="InfoShopping App" key="TelaInicial" initial/>
        </Stack>
    </Router>
)