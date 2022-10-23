import { NumericFormat, NumericFormatProps } from 'react-number-format';
import styled from 'styled-components';

export type InputProps = NumericFormatProps & {
	$hasIcon?: boolean;
	$error?: boolean;
};

const Input = styled(NumericFormat)<InputProps>`
	width: 100%;
	height: 40px;
	outline: ${({ $error, theme }) =>
		$error ? `2px solid ${theme.colors.border.input.error}` : 'none'};
	border: none;
	background-color: ${({ theme }) => theme.colors.background.input.default};
	text-align: right;
	font-size: 1.125rem;
	color: ${({ theme }) => theme.colors.text.input.default};
	padding-left: ${({ $hasIcon }) => ($hasIcon ? '25px' : '10px')};
	border-radius: 5px;
	padding-right: 10px;
	font-weight: bold;
	margin-top: 5px;
	&::placeholder {
		color: ${({ theme }) => theme.colors.text.input.placeholder};
	}
	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.border.input.focus};
	}
`;
export default Input;
