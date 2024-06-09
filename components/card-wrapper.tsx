import { CardComponent } from './card-component';
import { IPost } from '@/types/types';
import { ICardWrapperProps } from '@/types/types';

export default function CardWrapper({ posts }: ICardWrapperProps) {
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
