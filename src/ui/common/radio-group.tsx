import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { StyledComponent } from '@/styled-system/types/jsx';

export const radioGroup = cva({
	base: {
		display: 'grid',
		gap: '2',
	},
});

export const radioGroupItem = cva({
	base: {
		aspectRatio: 'square',
		h: '4',
		w: '4',
		rounded: 'full',
		border: 'primary',
		color: 'primary',
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
	},
});

export const radioGroupItemIndicator = cva({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const StyledRadioGroup = styled('div', radioGroup);
export const StyledRadioGroupItem = styled('input', radioGroupItem);
export const StyledRadioGroupItemIndicator = styled(
	'div',
	radioGroupItemIndicator
);

export type StyledRadioGroupProps = HTMLStyledProps<typeof StyledRadioGroup>;
export type StyledRadioGroupItemProps = HTMLStyledProps<
	typeof StyledRadioGroupItem
>;
export type StyledRadioGroupItemIndicatorProps = HTMLStyledProps<
	typeof StyledRadioGroupItemIndicator
>;

export type StyledRadioGroupElement = StyledComponent<typeof StyledRadioGroup>;
