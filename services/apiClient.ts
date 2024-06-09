import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://dummyjson.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

apiClient.interceptors.request.use(
	config => {
		let token;
		if (typeof window !== 'undefined') {
			token = localStorage.getItem('authToken');
		}

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default apiClient;
