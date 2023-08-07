import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { StyledComponent } from '@/styled-system/types/jsx';

export const checkbox = cva({
	base: {
		h: '4',
		w: '4',
		flexShrink: '0',
		rounded: 'sm',
		border: 'primary',
		focusRingOffsetColor: 'background',
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
		'&[data-state="checked"]': {
			bg: 'primary',
			color: 'primary.foreground',
		},
	},
});

export const checkboxIndicator = cva({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'currentColor',
	},
});

export const StyledCheckbox = styled('input', checkbox);
export const StyledCheckboxIndicator = styled('div', checkboxIndicator);

export type StyledCheckboxProps = HTMLStyledProps<typeof StyledCheckbox>;
export type StyledCheckboxIndicatorProps = HTMLStyledProps<
	typeof StyledCheckboxIndicator
>;

export type StyledCheckboxElement = StyledComponent<typeof StyledCheckbox>;
