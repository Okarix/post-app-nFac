'use client';
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { IAuthContextProps, IAuthProviderProps } from '@/types/types';

export const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const storedToken = localStorage.getItem('authToken');
		if (storedToken) {
			setToken(storedToken);
			setIsAuthenticated(true);
			axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		if (!loading && !isAuthenticated) {
			router.push('/');
		}
	}, [loading, isAuthenticated, router]);

	const login = async (username: string, password: string) => {
		try {
			const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
			const { token } = response.data;
			setToken(token);
			setIsAuthenticated(true);
			localStorage.setItem('authToken', token);
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			router.push('/posts');
		} catch (error) {
			console.error('Login failed', error);
		}
	};

	const logout = () => {
		setToken(null);
		setIsAuthenticated(false);
		localStorage.removeItem('authToken');
		delete axios.defaults.headers.common['Authorization'];
		router.push('/');
	};

	if (loading) {
		return <div className='container text-center mt-[20%]'>Loading...</div>;
	}

	return <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>{children}</AuthContext.Provider>;
};
