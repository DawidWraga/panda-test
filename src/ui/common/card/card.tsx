import { forwardRef } from 'react';
import {
	StyledCard,
	StyledCardContent,
	StyledCardContentProps,
	StyledCardDescription,
	StyledCardDescriptionProps,
	StyledCardFooter,
	StyledCardFooterProps,
	StyledCardHeader,
	StyledCardHeaderProps,
	StyledCardProps,
	StyledCardTitle,
	StyledCardTitleProps,
} from './card.styled';

export type CardProps = StyledCardProps & {};
export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	return <StyledCard ref={ref} {...props} />;
});

Card.displayName = 'Card';

export type CardHeaderProps = StyledCardHeaderProps & {};
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
	(props, ref) => {
		return <StyledCardHeader ref={ref} {...props} />;
	}
);

CardHeader.displayName = 'CardHeader';

export type CardTitleProps = StyledCardTitleProps & {};
export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
	(props, ref) => {
		return <StyledCardTitle ref={ref} {...props} />;
	}
);

CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = StyledCardDescriptionProps & {};
export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
	(props, ref) => {
		return <StyledCardDescription ref={ref} {...props} />;
	}
);

CardDescription.displayName = 'CardDescription';

export type CardContentProps = StyledCardContentProps & {};
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	(props, ref) => {
		return <StyledCardContent ref={ref} {...props} />;
	}
);

CardContent.displayName = 'CardContent';

export type CardFooterProps = StyledCardFooterProps & {};
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
	(props, ref) => {
		return <StyledCardFooter ref={ref} {...props} />;
	}
);

CardFooter.displayName = 'CardFooter';
