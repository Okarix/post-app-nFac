import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';

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
						<span className='flex items-center gap-1 '>
							<ThumbsUp className='w-5 h-5' />
							51
						</span>
						<span className='flex items-center gap-1'>
							<ThumbsDown className='w-5 h-5' />
							24
						</span>
						<span className='flex items-center gap-1'>
							<Eye className='w-5 h-5' />
							300
						</span>
					</div>
					<div className='flex gap-3'>
						<Badge>Reading</Badge>
						<Badge>Cats</Badge>
						<Badge>Books</Badge>
					</div>
					<Link href='/1'>
						<p className='text-slate-400 cursor-pointer hover:text-white'>Read more...</p>
					</Link>
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
