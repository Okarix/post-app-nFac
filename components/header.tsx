'use client';

import { useContext } from 'react';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from './ui/toggle';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
	const authContext = useContext(AuthContext);
	const router = useRouter();

	const handleLogout = () => {
		if (authContext) {
			authContext.logout();
			router.push('/');
		}
	};

	const handleLogin = () => {
		router.push('/');
	};

	return (
		<Menubar>
			<div className='flex justify-between w-full'>
				<div className='flex items-center'>
					<MenubarMenu>
						<h2 className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>Post List App</h2>
					</MenubarMenu>
					<MenubarMenu>
						<ModeToggle />
					</MenubarMenu>
				</div>
				<div className='flex items-center'>
					<MenubarMenu>
						<MenubarTrigger>
							{authContext?.isAuthenticated ? (
								<>
									<Avatar>
										<AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIVgqcOAItXR_6PQZlMX6nzu1sSHlCAoMkg&s' />
										<AvatarFallback>Img</AvatarFallback>
									</Avatar>
								</>
							) : (
								<div className='p-3'>Log In</div>
							)}
						</MenubarTrigger>
						<MenubarContent>{authContext?.isAuthenticated ? <MenubarItem onClick={handleLogout}>Log Out</MenubarItem> : <MenubarItem onClick={handleLogin}>Log In</MenubarItem>}</MenubarContent>
					</MenubarMenu>
				</div>
			</div>
		</Menubar>
	);
};

export default Header;
