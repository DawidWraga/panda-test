import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { StyledComponent } from '@/styled-system/types/jsx';

export const accordionItem = cva({
	base: {
		borderBottom: 'base',
	},
});

export const accordionHeader = cva({
	base: {
		display: 'flex',
	},
});

export const accordionTrigger = cva({
	base: {
		display: 'flex',
		flex: '1',
		alignItems: 'center',
		justifyContent: 'space-between',
		py: '4',
		fontWeight: 'medium',
		transition: 'all',
		_hover: {
			textDecoration: 'underline',
		},
		'& > svg': {
			h: '4',
			w: '4',
			flexShrink: '0',
			transition: 'transform',
			transitionDuration: 'normal',
		},
		'&[data-state=open] > svg': {
			transform: 'rotate(180deg)',
		},
	},
});

export const accordionContent = cva({
	base: {
		overflow: 'hidden',
		textStyle: 'sm',
		transition: 'all',

		'&[data-state=closed]': {
			animation: 'accordion-up',
		},
		'&[data-state=open]': {
			animation: 'accordion-down',
		},
		'& > div': {
			pb: '4',
			pt: '0',
		},
	},
});

export const StyledAccordionItem = styled('div', accordionItem);
export const StyledAccordionHeader = styled('div', accordionHeader);
export const StyledAccordionTrigger = styled('button', accordionTrigger);
export const StyledAccordionContent = styled('div', accordionContent);

export type StyledAccordionItemProps = HTMLStyledProps<
	typeof StyledAccordionItem
>;
export type StyledAccordionHeaderProps = HTMLStyledProps<
	typeof StyledAccordionHeader
>;
export type StyledAccordionTriggerProps = HTMLStyledProps<
	typeof StyledAccordionTrigger
>;
export type StyledAccordionContentProps = HTMLStyledProps<
	typeof StyledAccordionContent
>;

export type StyledAccordionItemElement = StyledComponent<
	typeof StyledAccordionItem
>;
