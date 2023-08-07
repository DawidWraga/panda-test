import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';

export const inputRecipe = cva({
	base: {
		display: 'flex',
		h: '10',
		w: 'full',
		rounded: 'md',
		border: 'input',
		bg: 'background',
		px: '3',
		py: '2',
		textStyle: 'sm',
		focusRingOffsetColor: 'background',

		_file: {
			border: 'none',
			bg: 'transparent',
			textStyle: 'sm',
			fontWeight: 'medium',
		},

		_placeholder: {
			color: 'muted.foreground',
		},

		_focusVisible: {
			outline: '2px solid transparent',
			outlineOffset: '2px',
			focusRingWidth: '2',
			focusRingColor: 'ring',
			focusRingOffsetWidth: '2',
		},

		_disabled: {
			cursor: 'not-allowed',
			opacity: '0.5',
		},
	},
});

export const StyledInput = styled('input', inputRecipe);
export type StyledInputProps = HTMLStyledProps<typeof StyledInput>;
