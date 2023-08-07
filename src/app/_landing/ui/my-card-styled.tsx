import { css } from '@/styled-system/css';
import { Flex, HStack, Stack, VStack } from '@/styled-system/jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/my-card-styled';

export interface MyCardStyledProps {}

export function MyCardStyled(props: MyCardStyledProps) {
	const {} = props;

	return (
		<>
			<Card>
				<CardHeader
					className={css({
						display: 'flex',
						flexDir: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						mt: '0',
						mb: '0',
						pb: '2',
					})}
				>
					<CardTitle
						className={css({
							fontSize: 'sm',
							lineHeight: 'sm',
							fontWeight: 'medium',
						})}
					>
						Total Revenue
					</CardTitle>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className={css({ h: '4', w: '4' })}
					>
						<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
					</svg>
				</CardHeader>
				<CardContent>
					<div
						className={css({
							fontSize: '2xl',
							lineHeight: '2xl',
							fontWeight: 'bold',
						})}
					>
						$45,231.89
					</div>
					<p className={css({ fontSize: 'xs', lineHeight: 'xs' })}>
						+20.1% from last month
					</p>
				</CardContent>
			</Card>
		</>
	);
}
