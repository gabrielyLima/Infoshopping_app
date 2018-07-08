import { API } from '@constants';

export const listarServicos = () => {
	const config = {
		  method: 'GET',
		  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
	return fetch(API.url +'/api/servicos/', config)
}

export const realizarServico = (servico) => {
	const config = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({servico})
		}
	return fetch(API.url +'/api/servicos/', config)
}

export const removerServico = (id_servico) => {
	const config = {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}
	return fetch(API.url +'/api/servicos/'+id_servico, config)
}
