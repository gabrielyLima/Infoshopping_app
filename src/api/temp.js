import { API } from '@constants';

export const listar = (id) => {
	const config = {
		  method: 'GET',
		  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
	return fetch(API.url +'/consultas/'+id, config)
}