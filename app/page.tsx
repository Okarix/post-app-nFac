import CardWrapper from '@/components/card-wrapper';
import { getPosts } from '@/utils/api';
import { IPost } from '@/types';

export default async function Home() {
	const posts: IPost[] = await getPosts();

	return (
		<main className='container mx-auto py-10'>
			<CardWrapper posts={posts} />
		</main>
	);
}
