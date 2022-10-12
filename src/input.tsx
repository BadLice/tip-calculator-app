import { NumericFormat, NumericFormatProps } from 'react-number-format';
import styled from 'styled-components';

type InputProps = NumericFormatProps & {
	$hasIcon?: boolean;
};
export const Input = styled(NumericFormat)<InputProps>`
	width: 100%;
	height: 40px;
	outline: none;
	border: none;
	background-color: #f3f8fb;
	text-align: right;
	font-size: 18px;
	color: #183b3d;
	padding-left: ${({ $hasIcon }) => ($hasIcon ? '25px' : '10px')};
	border-radius: 5px;
	padding-right: 10px;
	font-weight: bold;
	margin-top: 5px;
	&:focus {
		outline: 2px solid #5c9f95;
	}
	&:active {
		outline: 2px solid #5c9f95;
	}
`;

const Label = styled.label`
	position: relative;
	color: #6f7879;
	font-weight: bold;
	font-size: 13px;
`;

type IconProps = {
	path: string;
};

const Icon = styled.div<IconProps>`
	& {
		position: absolute;
		top: calc(50% + 7px);
		left: 10px;
		color: silver;
		display: inline-block;
		width: 1em;
		height: 1em;
		stroke-width: 0;
		stroke: currentColor;
		fill: currentColor;
	}
	&:before {
		content: url('${({ path }) => path}');
	}
`;

type NumberInputProps = NumericFormatProps & {
	path?: string;
	allowNegative?: boolean;
	decimalScale?: number;
	label?: string;
};

const NumberInput = ({ path, allowNegative, decimalScale, label }: NumberInputProps) => {
	return (
		<>
			<Label>
				{label}
				{path && <Icon path={path} />}
				<Input
					$hasIcon={!!path}
					allowNegative={allowNegative}
					decimalScale={decimalScale}
				/>
			</Label>
		</>
	);
};

export default NumberInput;
