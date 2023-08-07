import { Header } from '@/app/root-layout-ui/header';

export interface RootLayoutUiProps {
	children: React.ReactNode;
}

export function RootLayoutUi(props: RootLayoutUiProps) {
	const { children } = props;

	return (
		<>
			<Header />
			{children}
		</>
	);
}
