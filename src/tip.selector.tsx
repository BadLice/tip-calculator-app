import { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import Input from './styledComponents/input';
import Label from './styledComponents/label';

type TipSelectorProps = {
	tip: number;
	setTip: React.Dispatch<React.SetStateAction<number | null>>;
};

type RadioProps = {
	$selected: boolean;
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	gap: 10px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
`;

const RadioButton = styled(Button)<RadioProps & React.HTMLProps<HTMLButtonElement>>`
	transition: background-color 0.2s ease-in;
	background-color: ${({ $selected }) => ($selected ? '#a7e7df' : '#1b494d')};
	color: ${({ $selected }) => ($selected ? '#1b494d' : '#fff')};
`;

const TipInput = styled(Input)<RadioProps>`
	width: 98px;
	margin-top: 0px;
`;

const TipSelector = ({ tip, setTip }: TipSelectorProps) => {
	const [selection, setSelection] = useState<string | null>(null);

	const handleChangeSelection = (selected: string, tip: number) => {
		setSelection(selected);
		setTip(null);
	};

	return (
		<>
			<Container>
				<Label>Select Tip %</Label>
				<RadioButton
					id='five'
					onClick={() => handleChangeSelection('five', 5)}
					$selected={selection === 'five'}
				>
					5%
				</RadioButton>
				<RadioButton
					id='ten'
					onClick={() => handleChangeSelection('ten', 10)}
					$selected={selection === 'ten'}
				>
					10%
				</RadioButton>
				<RadioButton
					id='fifteen'
					onClick={() => handleChangeSelection('fifteen', 15)}
					$selected={selection === 'fifteen'}
				>
					15%
				</RadioButton>
				<RadioButton
					id='twentifive'
					onClick={() => handleChangeSelection('twentifive', 25)}
					$selected={selection === 'twentifive'}
				>
					25%
				</RadioButton>
				<RadioButton
					id='fifty'
					onClick={() => handleChangeSelection('fifty', 50)}
					$selected={selection === 'fifty'}
				>
					50%
				</RadioButton>
				<TipInput
					id={'custom'}
					$selected={selection === 'custom'}
					onValueChange={(e) => handleChangeSelection('custom', e.floatValue!)}
					value={tip}
					allowNegative={false}
				/>
			</Container>
		</>
	);
};

export default TipSelector;
