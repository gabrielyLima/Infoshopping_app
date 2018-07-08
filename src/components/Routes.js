import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import TelaInicial from '@components/TelaInicial';
import CadastroProduto from '@components/CadastroProduto';
import CadastroServico from '@components/CadastroServico';
import CadastroFuncionario from '@components/CadastroFuncionario';
import CadastroUsuario from '@components/CadastroUsuario';
import { COLORS } from '@constants';

export default () => (
    <Router
        navigationBarStyle={{ backgroundColor: COLORS.primaryColor, elevation: 0}}
        titleStyle={{ color: '#FFFFFF'}}
        headerTintColor="#fff"
    >
        <Stack>
            <Scene component={TelaInicial} title="InfoShopping App" key="TelaInicial" type="reset"/>
            <Scene component={CadastroProduto} title="Cadastrar Produto" key="CadastroProduto" />
            <Scene component={CadastroServico} title="Cadastrar Servico" key="CadastroServico" />
            <Scene component={CadastroFuncionario} title="Cadastrar Funcionario" key="CadastroFuncionario" />
            <Scene component={CadastroUsuario} title="Cadastrar Usuario" key="CadastroUsuario" />
        </Stack>
    </Router>
)