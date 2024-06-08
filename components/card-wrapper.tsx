import { CardComponent } from './card-component';
import { IPost } from '@/types';

interface CardWrapperProps {
	posts: IPost[];
}

export default function CardWrapper({ posts }: CardWrapperProps) {
	return (
		<main className='grid grid-flow-row gap-6'>
			{posts.map((post: IPost) => {
				return (
					<CardComponent
						{...post}
						key={post.id}
					/>
				);
			})}
		</main>
	);
}
