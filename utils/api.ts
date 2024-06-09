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

export const addPost = async (postData: { title: string; body: string }) => {
	try {
		const response = await apiClient.post('/posts/add');
		return response.data;
	} catch (error) {
		console.error('Error adding post:', error);
		throw error;
	}
};

export const updatePost = async (id: number, postData: { title: string; body: string }) => {
	try {
		const response = await apiClient.put(`/posts/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error updating post:', error);
		throw error;
	}
};

export const deletePost = async (id: number) => {
	try {
		const response = await apiClient.delete(`/posts/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error deleting post:', error);
		throw error;
	}
};
