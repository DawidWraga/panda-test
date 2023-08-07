import { css, cx } from '@/styled-system/css';
import { HStack, styled } from '@/styled-system/jsx';
import { hstack } from '@/styled-system/patterns';
import { Link } from '@/ui/link';

export interface NavItemListProps extends React.HTMLAttributes<HTMLElement> {}

export function NavItemList(props: NavItemListProps) {
	const { className } = props;

	return (
		<>
			<HStack gap={4} {...props}>
				<Link href="/examples/dashboard" active>
					Dashboard
				</Link>
				<Link href="/examples/dashboard">Track</Link>
				<Link href="/examples/dashboard">Discover</Link>
				<Link href="/examples/dashboard">Goals</Link>
			</HStack>
		</>
	);
}
