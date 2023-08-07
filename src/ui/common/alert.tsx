import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { StyledComponent } from '@/styled-system/types/jsx';

export const alert = cva({
	base: {
		position: 'relative',
		w: 'full',
		rounded: 'lg',
		border: 'base',
		p: '4',
		'&:has(svg)': {
			pl: '11',
		},
		'& > svg + div': {
			translateY: '-3px',
		},
		'& > svg': {
			position: 'absolute',
			left: '4',
			top: '4',
			color: 'foreground',
			h: '4',
			w: '4',
		},
	},
	variants: {
		variant: {
			default: {
				bg: 'background',
				color: 'foreground',
			},
			destructive: {
				bca: 'destructive/50',
				color: 'destructive',
				_dark: {
					borderColor: 'destructive',
				},
				'& > svg': {
					color: 'destructive',
				},
			},
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export const alertTitle = cva({
	base: {
		mb: '1',
		fontWeight: 'medium',
		leading: 'none',
		tracking: 'tight',
	},
});

export const alertDescription = cva({
	base: {
		textStyle: 'sm',
		'& p': {
			leading: 'relaxed',
		},
	},
});

export const StyledAlert = styled('div', alert);
export const StyledAlertTitle = styled('div', alertTitle);
export const StyledAlertDescription = styled('div', alertDescription);

export type StyledAlertProps = HTMLStyledProps<typeof StyledAlert>;
export type StyledAlertTitleProps = HTMLStyledProps<typeof StyledAlertTitle>;
export type StyledAlertDescriptionProps = HTMLStyledProps<
	typeof StyledAlertDescription
>;

export type StyledAlertElement = StyledComponent<typeof StyledAlert>;
