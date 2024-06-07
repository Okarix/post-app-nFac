import { ThumbsUp, ThumbsDown, Eye, ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

export default function Post() {
	return (
		<main className='container  '>
			<Link href='/'>
				<ArrowBigLeft className='w-12 h-12 absolute top-16 cursor-pointer' />
			</Link>
			<div className='flex flex-col items-center mt-20'>
				<h1 className='font-bold text-2xl '>What Happens When You Start Reading Every Day</h1>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_r6dn-q1qxOM9WIbzUi80HK_siNTTSFj9xw&s'
					alt='Image'
					className='mt-14 w-3/4 h-72 object-contain'
				/>
				<p className='mt-10'>Think before you speak. Read before you think. — Fran Lebowitz — I love reading. Reading is the best habit you can build to boost every part of your life. I don’t mind reading an ebook, but I prefer a physical book. The smell of new pages is magical. But who has the time to sit down with a book in this…</p>
			</div>
			<div className='flex gap-4 items-start mt-4'>
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
		</main>
	);
}
