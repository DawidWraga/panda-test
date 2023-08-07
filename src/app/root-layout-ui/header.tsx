import { NavItemList } from '@/app/root-layout-ui/nav-item-list';
import { Flex, HStack } from '@/styled-system/jsx';
import { UserNav } from '@/ui/composed/user-menu';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
	const {} = props;

	return (
		<>
			<HStack
				h={12}
				borderBottomWidth="1px"
				px={4}
				w="full"
				justify="space-between"
			>
				<NavItemList />
				<UserNav />
			</HStack>
		</>
	);
}
