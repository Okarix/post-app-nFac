import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { truncateText } from '@/utils/truncate';
import { ICardProps } from '@/types';

export function CardComponent({ id, title, body, reactions, tags, views }: ICardProps) {
	return (
		<Card className='w-full flex justify-between items-center'>
			<div className='flex flex-col w-2/3 '>
				<CardHeader className='h-2/3'>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{truncateText(body, 260)}</CardDescription>
				</CardHeader>
				<CardFooter className='mt-2 gap-10'>
					<div className='flex gap-4'>
						<span className='flex items-center gap-1 '>
							<ThumbsUp className='w-5 h-5' />
							{reactions.likes}
						</span>
						<span className='flex items-center gap-1'>
							<ThumbsDown className='w-5 h-5' />
							{reactions.dislikes}
						</span>
						<span className='flex items-center gap-1'>
							<Eye className='w-5 h-5' />
							{views}
						</span>
					</div>
					<div className='flex gap-3'>
						{tags.map((tag, index) => {
							return <Badge key={index}>{tag}</Badge>;
						})}
					</div>
					<Link href={`/posts/${id}`}>
						<p className='text-slate-400 cursor-pointer hover:text-white'>Read more...</p>
					</Link>
				</CardFooter>
			</div>
			<CardContent className='w-1/5 '>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_r6dn-q1qxOM9WIbzUi80HK_siNTTSFj9xw&s'
					alt='Image'
					className='pt-6 '
				/>
			</CardContent>
		</Card>
	);
}
