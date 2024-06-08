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

export interface CardWrapperProps {
	posts: IPost[];
}
