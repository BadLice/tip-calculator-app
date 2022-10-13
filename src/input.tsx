import { useState } from 'react';
import {
	NumberFormatValues,
	NumericFormatProps,
	OnValueChange,
	SourceInfo,
} from 'react-number-format';
import styled from 'styled-components';
import Input from './styledComponents/input';
import Label from './styledComponents/label';

type IconProps = {
	path: string;
};

type NumberInputProps = NumericFormatProps & {
	iconPath?: string;
	allowNegative?: boolean;
	decimalScale?: number;
	label?: string;
	isValid?: (value: number) => boolean | string;
	onValueChange?: OnValueChange | undefined;
};

const Icon = styled.div<IconProps>`
	& {
		position: absolute;
		top: calc(36%);
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

const ErrorLabel = styled(Label)`
	width: 50%;
	text-align: right;
	color: ${({ theme }) => theme.colors.text.error}; ;
`;

const TextLabel = styled(Label)`
	width: 50%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const NumberInput = ({
	iconPath,
	allowNegative,
	decimalScale,
	label,
	isValid,
	onValueChange,
	value,
}: NumberInputProps) => {
	const [error, setError] = useState<boolean | string>(false);

	const handleChange = (e: NumberFormatValues, s: SourceInfo) => {
		if (isValid) {
			let valid = isValid(e.floatValue!);
			setError(typeof valid === 'boolean' ? !valid : valid);
		} else {
			setError(false);
		}
		if (onValueChange) {
			onValueChange(e, s);
		}
	};

	return (
		<>
			<Container>
				<TextLabel>{label}</TextLabel>
				{error && typeof error === 'string' && <ErrorLabel>{error}</ErrorLabel>}
				<Label>
					{iconPath && <Icon path={iconPath} />}
					<Input
						$hasIcon={!!iconPath}
						$error={!!error}
						allowNegative={allowNegative}
						decimalScale={decimalScale}
						placeholder='0'
						onValueChange={handleChange}
						value={value}
					/>
				</Label>
			</Container>
		</>
	);
};

export default NumberInput;
