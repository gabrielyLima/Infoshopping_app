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
