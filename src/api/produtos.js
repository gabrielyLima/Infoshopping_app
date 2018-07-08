import { API } from '@constants';

export const listarProdutos = () => {
	const config = {
		  method: 'GET',
		  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
	return fetch(API.url +'/api/produtos/', config)
}

export const cadastrarProduto = (produto) => {
	const config = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({produto})
		}
	return fetch(API.url +'/api/produtos/', config)
}

export const removerProduto = (codigo_barras) => {
	const config = {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}
	return fetch(API.url +'/api/produtos/'+codigo_barras, config)
}
