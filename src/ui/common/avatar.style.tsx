import { cva } from '@/styled-system/css';
import { HTMLStyledProps, styled } from '@/styled-system/jsx';
import { StyledComponent } from '@/styled-system/types/jsx';

export const avatar = cva({
	base: {
		position: 'relative',
		display: 'flex',
		h: '10',
		w: '10',
		flexShrink: '0',
		overflow: 'hidden',
		rounded: 'full',
	},
});

export const avatarImage = cva({
	base: {
		aspectRatio: 'square',
		h: 'full',
		w: 'full',
	},
});

export const avatarFallback = cva({
	base: {
		display: 'flex',
		h: 'full',
		w: 'full',
		alignItems: 'center',
		justifyContent: 'center',
		rounded: 'full',
		bg: 'muted',
	},
});

export const StyledAvatar = styled('div', avatar);
export const StyledAvatarImage = styled('img', avatarImage);
export const StyledAvatarFallback = styled('div', avatarFallback);

export type StyledAvatarProps = HTMLStyledProps<typeof StyledAvatar>;
export type StyledAvatarImageProps = HTMLStyledProps<typeof StyledAvatarImage>;
export type StyledAvatarFallbackProps = HTMLStyledProps<
	typeof StyledAvatarFallback
>;

export type StyledAvatarElement = StyledComponent<typeof StyledAvatar>;
