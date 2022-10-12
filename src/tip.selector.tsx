import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './input';

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

type RadioProps = {
	$selected: boolean;
};
const Button = styled.button<RadioProps>`
	width: 98px;
	height: 40px;
	background-color: ${({ $selected }) => ($selected ? '#a7e7df' : '#1b494d')};
	color: ${({ $selected }) => ($selected ? '#1b494d' : '#fff')};
	border: none;
	border-radius: 5px;
	font-size: 25px;
`;

const TipInput = styled(Input)<RadioProps>`
	width: 98px;
	margin-top: 0px;
`;

type TipSelectorProps = {
	tip: number;
	setTip: React.Dispatch<React.SetStateAction<number | null>>;
};

const TipSelector = ({ tip, setTip }: TipSelectorProps) => {
	const [selection, setSelection] = useState<string | null>(null);

	const handleChangeSelection = (selected: string) => {
		setSelection(selected);
		setTip(null);
	};

	console.log(tip);

	return (
		<Container>
			<Button
				id='five'
				onClick={() => handleChangeSelection('five')}
				$selected={selection === 'five'}
			>
				5%
			</Button>
			<Button
				id='ten'
				onClick={() => handleChangeSelection('ten')}
				$selected={selection === 'ten'}
			>
				10%
			</Button>
			<Button
				id='fifteen'
				onClick={() => handleChangeSelection('fifteen')}
				$selected={selection === 'fifteen'}
			>
				15%
			</Button>
			<Button
				id='twentifive'
				onClick={() => handleChangeSelection('twentifive')}
				$selected={selection === 'twentifive'}
			>
				25%
			</Button>
			<Button
				id='fifty'
				onClick={() => handleChangeSelection('fifty')}
				$selected={selection === 'fifty'}
			>
				50%
			</Button>
			<TipInput
				id={'custom'}
				onClick={() => handleChangeSelection('custom')}
				$selected={selection === 'custom'}
				onValueChange={(e) => setTip(e.floatValue!)}
				value={tip}
			/>
		</Container>
	);
};

export default TipSelector;
