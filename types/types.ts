import { ReactNode } from 'react';

export interface IReactions {
	likes: string;
	dislikes: string;
}
export interface ICardProps {
	id: number;
	title: string;
	body: string;
	reactions: IReactions;
	tags: string[];
	views: string;
}

export interface IPost {
	id: number;
	title: string;
	body: string;
	reactions: IReactions;
	tags: string[];
	views: string;
}

export interface ICardWrapperProps {
	posts: IPost[];
}

export interface IAuthContextProps {
	isAuthenticated: boolean;
	token: string | null;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
}

export interface IAuthProviderProps {
	children: ReactNode;
}
