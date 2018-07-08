import { API } from '@constants';

export const listarUsuarios = () => {
	const config = {
		  method: 'GET',
		  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
	return fetch(API.url +'/api/usuarios/', config)
}

export const cadastrarUsuario = (usuario) => {
	const config = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({usuario})
		}
	return fetch(API.url +'/api/usuarios/', config)
}

export const removerUsuario = (email) => {
	const config = {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}
	return fetch(API.url +'/api/usuarios/'+email, config)
}
