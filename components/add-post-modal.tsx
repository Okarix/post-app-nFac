'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { addPost } from '@/utils/api';

interface AddPostModalProps {
	closeModal: () => void;
}

const AddPostModal: React.FC<AddPostModalProps> = ({ closeModal }) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addPost({ title, body }); // Add necessary fields
			closeModal();
		} catch (error) {
			console.error('Error adding post:', error);
		}
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
			<Card className='w-[400px]'>
				<CardHeader>
					<CardTitle>Add New Post</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						<div>
							<Label htmlFor='title'>Title</Label>
							<Input
								id='title'
								value={title}
								onChange={e => setTitle(e.target.value)}
								placeholder='Enter post title'
								required
							/>
						</div>
						<div>
							<Label htmlFor='body'>Description</Label>
							<Input
								id='body'
								value={body}
								onChange={e => setBody(e.target.value)}
								placeholder='Enter post description'
								required
							/>
						</div>
						<CardFooter className='flex justify-end space-x-4'>
							<Button
								type='button'
								onClick={closeModal}
								variant='outline'
							>
								Cancel
							</Button>
							<Button type='submit'>Add Post</Button>
						</CardFooter>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default AddPostModal;
