import { css } from '@/styled-system/css';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Button } from '@/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/ui/dropdown-menu';

export function UserNav() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button asChild>
					<Avatar className={css({ h: '8', w: '8', rounded: 'full' })}>
						<AvatarImage src="/avatars/01.png" alt="@shadcn" />
						<AvatarFallback>SC</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className={css({ w: '56' })} align="end" forceMount>
				<DropdownMenuLabel className={css({ fontWeight: 'normal' })}>
					<div
						className={css({
							display: 'flex',
							flexDir: 'column',
							mt: '1',
							mb: '1',
						})}
					>
						<p
							className={css({
								fontSize: 'sm',
								lineHeight: 'none',
								fontWeight: 'medium',
							})}
						>
							shadcn
						</p>
						<p className={css({ fontSize: 'xs', lineHeight: 'none' })}>
							m@example.com
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Billing
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>New Team</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
