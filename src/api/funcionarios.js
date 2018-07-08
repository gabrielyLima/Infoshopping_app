import { API } from '@constants';

export const listarFuncionarios = () => {
	const config = {
		  method: 'GET',
		  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
	return fetch(API.url +'/api/funcionarios/', config)
}

export const cadastrarFuncionario = (funcionario) => {
	const config = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({funcionario})
		}
	return fetch(API.url +'/api/funcionarios/', config)
}

export const removerFuncionario = (id_funcionario) => {
	const config = {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}
	return fetch(API.url +'/api/funcionarios/'+id_funcionario, config)
}
