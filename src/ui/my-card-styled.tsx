import { RecipeVariantProps, cva, cx } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { JsxStyleProps } from '@/styled-system/types';
import React from 'react';

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

export const StyledCard = styled('div', card);
export type StyledCardProps = HTMLStyledProps<typeof StyledCard>;

export type CardProps = StyledCardProps & {};
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(props, ref) => {
		return <StyledCard ref={ref} {...props} />;
	}
);

Card.displayName = 'Card';
export const cardHeader = cva({
	base: {
		display: 'flex',
		flexDirection: 'column',
		spaceY: '1.5',
		p: '6',
	},
});

export const StyledCardHeader = styled('div', cardHeader);
export type StyledCardHeaderProps = HTMLStyledProps<typeof StyledCardHeader>;

export type CardHeaderProps = StyledCardHeaderProps & {};
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
	(props, ref) => <StyledCardHeader ref={ref} {...props} />
);

CardHeader.displayName = 'CardHeader';

export const cardTitle = cva({
	base: {
		textStyle: '2xl',
		fontWeight: 'semibold',
		leading: 'none',
		tracking: 'tight',
	},
});

export const StyledCardTitle = styled('div', cardTitle);
export type StyledCardTitleProps = HTMLStyledProps<typeof StyledCardTitle>;

export type CardTitleProps = StyledCardTitleProps & {};
export const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
	(props, ref) => <StyledCardTitle ref={ref} {...props} />
);

CardTitle.displayName = 'CardTitle';

export const cardDescription = cva({
	base: {
		textStyle: 'sm',
		color: 'muted.foreground',
	},
});

export const StyledCardDescription = styled('div', cardDescription);
export type StyledCardDescriptionProps = HTMLStyledProps<
	typeof StyledCardDescription
>;

export type CardDescriptionProps = StyledCardDescriptionProps & {};
export const CardDescription = React.forwardRef<
	HTMLDivElement,
	CardDescriptionProps
>((props, ref) => <StyledCardDescription ref={ref} {...props} />);

CardDescription.displayName = 'CardDescription';

export const cardContent = cva({
	base: {
		p: '6',
		pt: '0',
	},
});

export const StyledCardContent = styled('div', cardContent);
export type StyledCardContentProps = HTMLStyledProps<typeof StyledCardContent>;

export type CardContentProps = StyledCardContentProps & {};
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
	(props, ref) => <StyledCardContent ref={ref} {...props} />
);

CardContent.displayName = 'CardContent';

export const cardFooter = cva({
	base: {
		display: 'flex',
		alignItems: 'center',
		p: '6',
		pt: '0',
	},
});

export const StyledCardFooter = styled('div', cardFooter);
export type StyledCardFooterProps = HTMLStyledProps<typeof StyledCardFooter>;

export type CardFooterProps = StyledCardFooterProps & {};
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
	(props, ref) => <StyledCardFooter ref={ref} {...props} />
);

CardFooter.displayName = 'CardFooter';
