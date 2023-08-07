import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import NextLink from 'next/link';

export const Link = styled(
	NextLink,
	cva({
		base: {
			fontSize: 'sm',
			lineHeight: 'sm',
			fontWeight: 'medium',
			transition: 'colors',
			color: 'gray.400',
			_hover: {
				color: 'gray.800',
			},
		},
		variants: {
			active: {
				true: {
					color: 'gray.800',
				},
			},
		},
	})
);
