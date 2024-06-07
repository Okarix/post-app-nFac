import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from './ui/toggle';

export default function Header() {
	return (
		<Menubar>
			<div className='flex'>
				<MenubarMenu>
					<h2 className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>Post List App</h2>
				</MenubarMenu>
				<MenubarMenu>
					<ModeToggle />
				</MenubarMenu>
			</div>
			<div>
				<MenubarMenu>
					<MenubarTrigger>
						<Avatar>
							<AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIVgqcOAItXR_6PQZlMX6nzu1sSHlCAoMkg&s' />
							<AvatarFallback>Img</AvatarFallback>
						</Avatar>
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Log Out</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</div>
		</Menubar>
	);
}
