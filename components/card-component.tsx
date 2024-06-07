import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';
import { Badge } from './ui/badge';

export function CardComponent() {
	return (
		<Card className='w-full flex'>
			<div className='flex flex-col'>
				<CardHeader className='w-2/3 h-2/3'>
					<CardTitle>What Happens When You Start Reading Every Day</CardTitle>
					<CardDescription>Think before you speak. Read before you think. — Fran Lebowitz — I love reading. Reading is the best habit you can build to boost every part of your life. I don’t mind reading an ebook, but I prefer a physical book. The smell of new pages is magical. But who has the time to sit down with a book in this…</CardDescription>
				</CardHeader>
				<CardFooter className='mt-2 gap-10'>
					<div className='flex gap-4'>
						<span className='flex items-center '>
							<ThumbsUp />
							51
						</span>
						<span className='flex items-center'>
							<ThumbsDown />
							24
						</span>
						<span className='flex items-center'>
							<Eye />
							300
						</span>
					</div>
					<div className='flex gap-3'>
						<Badge>Reading</Badge>
						<Badge>Cats</Badge>
						<Badge>Books</Badge>
					</div>
				</CardFooter>
			</div>
			<CardContent className='w-1/3'>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_r6dn-q1qxOM9WIbzUi80HK_siNTTSFj9xw&s'
					alt='Image'
					className='pt-6'
				/>
			</CardContent>
		</Card>
	);
}
