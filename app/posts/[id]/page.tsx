'use client';

import { IPost } from '@/types/types';
import { getPost, updatePost } from '@/utils/api';
import { ThumbsUp, ThumbsDown, Eye, ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Post: React.FC = () => {
	const params = useParams();
	const { id } = params;
	const [post, setPost] = useState<IPost | null>(null);
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			if (id) {
				try {
					const postData: IPost = await getPost(Number(id));
					setPost(postData);
					setTitle(postData.title);
					setBody(postData.body);
				} catch (error) {
					console.error('Error fetching post:', error);
				}
			}
		};

		fetchData();
	}, [id]);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = async () => {
		if (id) {
			try {
				const updatedPost = await updatePost(Number(id), { title, body });
				setPost(updatedPost);
				setIsEditing(false);
			} catch (error) {
				console.error('Error updating post:', error);
			}
		}
	};

	if (!post) {
		return <div className='container text-center mt-[20%]'>Loading...</div>;
	}

	return (
		<main className='container py-4'>
			<Link href='/posts'>
				<ArrowBigLeft className='w-12 h-12 absolute top-16 cursor-pointer' />
			</Link>
			<div className='flex flex-col items-center mt-20'>
				{isEditing ? (
					<>
						<input
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
							className='border p-2 mb-2 w-full max-w-lg'
						/>
						<textarea
							value={body}
							onChange={e => setBody(e.target.value)}
							className='border p-2 mb-2 w-full max-w-lg h-40'
						/>
						<button
							onClick={handleSaveClick}
							className='bg-blue-500 text-white px-4 py-2 rounded'
						>
							Save
						</button>
					</>
				) : (
					<>
						<h1 className='font-bold text-2xl'>{post.title}</h1>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_r6dn-q1qxOM9WIbzUi80HK_siNTTSFj9xw&s'
							alt='Image'
							className='mt-14 w-3/4 h-72 object-contain'
						/>
						<p className='mt-10'>{post.body}</p>
						<button
							onClick={handleEditClick}
							className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
						>
							Edit
						</button>
					</>
				)}
			</div>
			<div className='flex gap-4 items-start mt-4'>
				<span className='flex items-center gap-1'>
					<ThumbsUp className='w-5 h-5' />
					{post.reactions.likes}
				</span>
				<span className='flex items-center gap-1'>
					<ThumbsDown className='w-5 h-5' />
					{post.reactions.dislikes}
				</span>
				<span className='flex items-center gap-1'>
					<Eye className='w-5 h-5' />
					{post.views}
				</span>
			</div>
		</main>
	);
};

export default Post;
