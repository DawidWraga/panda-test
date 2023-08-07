import { cva } from '@/styled-system/css';

export const dropdownMenuSubTrigger = cva({
	base: {
		display: 'flex',
		cursor: 'default',
		userSelect: 'none',
		alignItems: 'center',
		rounded: 'sm',
		px: '2',
		py: '1.5',
		textStyle: 'sm',
		outline: 'none',
		_focus: {
			bg: 'accent',
		},
		'&[data-state=open]': {
			bg: 'accent',
		},
	},
	variants: {
		inset: {
			true: {
				pl: '8',
			},
		},
	},
	defaultVariants: {
		inset: false,
	},
});

export const dropdownMenuSubContent = cva({
	base: {
		zIndex: 50,
		minW: '8rem',
		overflow: 'hidden',
		rounded: 'md',
		border: 'base',
		bg: 'popover',
		p: '1',
		color: 'popover.foreground',
		boxShadow: 'lg',
		'&[data-state=open]': {
			animateIn: true,
			fadeIn: 0,
			zoomIn: 95,
		},
		'&[data-state=closed]': {
			animateOut: true,
			fadeOut: 0,
			zoomOut: 95,
		},
	},
});

export const dropdownMenuContent = cva({
	base: {
		zIndex: 50,
		minW: '8rem',
		overflow: 'hidden',
		rounded: 'md',
		border: 'base',
		bg: 'popover',
		p: '1',
		color: 'popover.foreground',
		boxShadow: 'md',
		'&[data-state=open]': {
			animateIn: true,
			fadeIn: 0,
			zoomIn: 95,
		},
		'&[data-state=closed]': {
			animateOut: true,
			fadeOut: 0,
			zoomOut: 95,
		},
	},
});

export const dropdownMenuItem = cva({
	base: {
		position: 'relative',
		display: 'flex',
		cursor: 'default',
		userSelect: 'none',
		alignItems: 'center',
		rounded: 'sm',
		px: '2',
		py: '1.5',
		textStyle: 'sm',
		outline: 'none',
		transition: 'colors',

		_focus: {
			bg: 'accent',
			color: 'accent.foreground',
		},

		'&[data-disabled]': {
			pointerEvents: 'none',
			opacity: '0.5',
		},
	},
	variants: {
		inset: {
			true: {
				pl: '8',
			},
		},
	},
	defaultVariants: {
		inset: false,
	},
});

export const dropdownMenuCheckboxItem = cva({
	base: {
		position: 'relative',
		display: 'flex',
		cursor: 'default',
		userSelect: 'none',
		alignItems: 'center',
		rounded: 'sm',
		py: '1.5',
		pl: '8',
		pr: '2',
		textStyle: 'sm',
		outline: 'none',
		transition: 'colors',

		_focus: {
			bg: 'accent',
			color: 'accent.foreground',
		},

		'&[data-disabled]': {
			pointerEvents: 'none',
			opacity: '0.5',
		},
	},
});

export const dropdownMenuRadioItem = cva({
	base: {
		position: 'relative',
		display: 'flex',
		cursor: 'default',
		userSelect: 'none',
		alignItems: 'center',
		rounded: 'sm',
		py: '1.5',
		pl: '8',
		pr: '2',
		textStyle: 'sm',
		outline: 'none',
		transition: 'colors',
		_focus: {
			bg: 'accent',
			color: 'accent.foreground',
		},
		'&[data-disabled]': {
			pointerEvents: 'none',
			opacity: '0.5',
		},
	},
});

export const dropdownMenuItemIndicator = cva({
	base: {
		position: 'absolute',
		left: '2',
		display: 'flex',
		h: '3.5',
		w: '3.5',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const dropdownMenuLabel = cva({
	base: {
		px: '2',
		py: '1.5',
		textStyle: 'sm',
		fontWeight: 'semibold',
	},
	variants: {
		inset: {
			true: {
				pl: '8',
			},
		},
	},
	defaultVariants: {
		inset: false,
	},
});

export const dropdownMenuSeparator = cva({
	base: {
		mx: '-1',
		my: '1',
		h: '1px',
		bg: 'muted',
	},
});

export const dropdownMenuShortcut = cva({
	base: {
		ml: 'auto',
		textStyle: 'xs',
		tracking: 'widest',
		opacity: '0.6',
	},
});
