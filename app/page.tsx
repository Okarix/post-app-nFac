import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
	return (
		<Tabs
			defaultValue='account'
			className='w-[400px] container py-7'
		>
			<TabsList className='grid w-full grid-cols-2'>
				<TabsTrigger value='account'>Log In</TabsTrigger>
				<TabsTrigger value='password'>Sign Up</TabsTrigger>
			</TabsList>
			<TabsContent value='account'>
				<Card>
					<CardHeader>
						<CardTitle>Log In</CardTitle>
						<CardDescription>If you have an account, log in to your account</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								placeholder='Robert Smith'
								type='name'
							/>
						</div>
						<div className='space-y-1'>
							<Label htmlFor='username'>Password</Label>
							<Input
								type='password'
								id='password'
								placeholder='hello12345'
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button>Log In</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value='password'>
				<Card>
					<CardHeader>
						<CardTitle>Sign Up</CardTitle>
						<CardDescription>If you don't have an account, sign up for one</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								placeholder='Robert Smith'
								type='name'
							/>
						</div>
						<div className='space-y-1'>
							<Label htmlFor='username'>Password</Label>
							<Input
								type='password'
								id='password'
								placeholder='hello12345'
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button>Sign Up</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
