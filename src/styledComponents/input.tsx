import { NumericFormat, NumericFormatProps } from 'react-number-format';
import styled from 'styled-components';

export type InputProps = NumericFormatProps & {
	$hasIcon?: boolean;
	$error?: boolean;
};

const Input = styled(NumericFormat)<InputProps>`
	width: 100%;
	height: 40px;
	outline: ${({ $error }) => ($error ? '2px solid #d48f81' : 'none')};
	border: none;
	background-color: #f3f8fb;
	text-align: right;
	font-size: 18px;
	color: #102e2d;
	padding-left: ${({ $hasIcon }) => ($hasIcon ? '25px' : '10px')};
	border-radius: 5px;
	padding-right: 10px;
	font-weight: bold;
	margin-top: 5px;
	&::placeholder {
		color: #9cb1af;
	}
	&:focus {
		outline: 2px solid #64a59c;
	}
	&:active {
		outline: 2px solid #64a59c;
	}
`;
export default Input;
