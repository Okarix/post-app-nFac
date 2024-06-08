import apiClient from '@/services/apiClient';

export const getPosts = async () => {
	try {
		const response = await apiClient('/posts');
		return response.data.posts;
	} catch (error) {
		console.error('Error fetching posts:', error);
		throw error;
	}
};

export const getPost = async (id: number) => {
	try {
		const response = await apiClient(`/posts/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching post:', error);
		throw error;
	}
};
