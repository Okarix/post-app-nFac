import { CardComponent } from './card-component';
import { getPosts } from '@/utils/api';
import { IPost } from '@/types';

export default async function CardWrapper() {
	const posts: IPost[] = await getPosts();

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
