import { forwardRef } from 'react';
import { cx } from '@/styled-system/css';
import { StyledInput, StyledInputProps } from './input.styled';

export type InputProps = StyledInputProps & {};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <StyledInput ref={ref} {...props} />;
});

Input.displayName = 'Input';
