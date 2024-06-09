'use client';

import React, { useEffect, useState } from 'react';
import CardWrapper from '@/components/card-wrapper';
import { getPosts } from '@/utils/api';
import { IPost } from '@/types/types';

const Posts: React.FC = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const fetchedPosts: IPost[] = await getPosts();
				setPosts(fetchedPosts);
				setLoading(false);
			} catch (error) {
				setError('Error fetching posts');
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	if (loading) {
		return <div className='container text-center mt-[20%]'>Loading...</div>;
	}

	if (error) {
		return <div className='container text-center mt-[20%]'>{error}</div>;
	}

	return (
		<main className='container mx-auto py-10'>
			<CardWrapper posts={posts} />
		</main>
	);
};

export default Posts;
