import { FinalCard } from '@/app/_landing/ui/final-card';
import { MyCard } from '@/app/_landing/ui/my-card';
import { MyCardStyled } from '@/app/_landing/ui/my-card-styled';
import { NewsletterSection } from '@/app/_landing/ui/newsletter.section';
import { ShadowCard } from '@/app/_landing/ui/shadow-card';
import { css } from '@/styled-system/css';
import { Flex, Grid, HStack, Stack, VStack } from '@/styled-system/jsx';

export interface LandingPageProps {}

export default function LandingPage(props: LandingPageProps) {
	const {} = props;

	return (
		<>
			<VStack justify={'stretch'}>
				<ShadowCard />
				<MyCard />
				<MyCardStyled />
				<FinalCard />
			</VStack>
			<NewsletterSection />
		</>
	);
}
{
	/* {[...Array(3)].map((_, i) => (
						<ShadowCard key={'card-' + i} />
					))}
					{[...Array(3)].map((_, i) => (
						<MyCard key={'card-' + i} />
					))}
					{[...Array(3)].map((_, i) => (
						<MyCardStyled key={'card-' + i} />
					))} */
}
