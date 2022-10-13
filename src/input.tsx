import { useState } from 'react';
import { NumberFormatValues, NumericFormatProps, OnValueChange } from 'react-number-format';
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
	color: #d48f81;
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
}: NumberInputProps) => {
	const [error, setError] = useState<boolean | string>(false);

	const handleValidation = (e: NumberFormatValues) => {
		if (isValid) {
			let valid = isValid(e.floatValue!);
			setError(typeof valid === 'boolean' ? !valid : valid);
			return;
		}
		setError(false);
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
						onValueChange={handleValidation}
					/>
				</Label>
			</Container>
		</>
	);
};

export default NumberInput;
