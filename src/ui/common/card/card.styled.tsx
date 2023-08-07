import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { StyledComponent } from '@/styled-system/types/jsx';

export const card = cva({
	base: {
		rounded: 'lg',
		border: 'base',
		bg: 'card',
		color: 'card.foreground',
		shadow: 'xl',
	},
	variants: {
		visual: {
			solid: {
				border: 'none',
			},
			outline: {
				bg: 'transparent',
				border: '1px solid gray',
			},
		},
	},
});

export const cardHeader = cva({
	base: {
		display: 'flex',
		flexDirection: 'column',
		spaceY: '1.5',
		p: '6',
	},
});

export const cardTitle = cva({
	base: {
		textStyle: '2xl',
		fontWeight: 'semibold',
		leading: 'none',
		tracking: 'tight',
	},
});

export const cardDescription = cva({
	base: {
		textStyle: 'sm',
		color: 'muted.foreground',
	},
});

export const cardContent = cva({
	base: {
		p: '6',
		pt: '0',
	},
});

export const cardFooter = cva({
	base: {
		display: 'flex',
		alignItems: 'center',
		p: '6',
		pt: '0',
	},
});

export const StyledCard = styled('div', card);
export const StyledCardHeader = styled('div', cardHeader);
export const StyledCardTitle = styled('div', cardTitle);
export const StyledCardDescription = styled('div', cardDescription);
export const StyledCardContent = styled('div', cardContent);
export const StyledCardFooter = styled('div', cardFooter);

export type StyledCardProps = HTMLStyledProps<typeof StyledCard>;
// export type StyledCardProps = JsxHTMLProps<ComponentProps<typeof StyledCard>>;
export type StyledCardHeaderProps = HTMLStyledProps<typeof StyledCardHeader>;
export type StyledCardTitleProps = HTMLStyledProps<typeof StyledCardTitle>;
export type StyledCardDescriptionProps = HTMLStyledProps<
	typeof StyledCardDescription
>;
export type StyledCardContentProps = HTMLStyledProps<typeof StyledCardContent>;
export type StyledCardFooterProps = HTMLStyledProps<typeof StyledCardFooter>;

export type StyledCardElement = StyledComponent<typeof StyledCard>;
