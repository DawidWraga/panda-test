import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { defineRecipe } from '@pandacss/dev';

export const divider = cva({
	base: {
		flexShrink: 0,
		bg: 'border',
	},
	variants: {
		orientation: {
			horizontal: {
				h: '1px',
				w: 'full',
			},
			vertical: {
				h: 'full',
				w: '1px',
			},
		},
	},
	defaultVariants: {
		orientation: 'horizontal',
	},
});

export const Divider = styled('div', divider);
export type DividerProps = HTMLStyledProps<typeof Divider>;
