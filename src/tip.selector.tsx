import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import { TipContext } from './contexts/tip.context';
import Input from './styledComponents/input';
import Label from './styledComponents/label';

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
	&::placeholder {
		text-align: center;
	}
`;

const TipSelector = () => {
	const ctx = useContext(TipContext);

	const [tipPerc, setTipPerc] = useState<number | string | null>(null);

	const ctxSelected = ctx!.parameters.selected;

	//delete internal state when context state is deleted
	useEffect(() => {
		if (!ctxSelected) {
			setTipPerc('');
		}
	}, [ctxSelected]);

	const handleChangeSelection = (selected: string, tipPerc: number) => {
		if (selected === 'custom') {
			setTipPerc(tipPerc);
		} else {
			setTipPerc('');
		}
		ctx!.setParameters({ selected, tipPerc });
	};

	return (
		<>
			<Container>
				<Label>Select Tip %</Label>
				<RadioButton
					id='five'
					onClick={() => handleChangeSelection('five', 5)}
					$selected={ctx!.parameters.selected === 'five'}
				>
					5%
				</RadioButton>
				<RadioButton
					id='ten'
					onClick={() => handleChangeSelection('ten', 10)}
					$selected={ctx!.parameters.selected === 'ten'}
				>
					10%
				</RadioButton>
				<RadioButton
					id='fifteen'
					onClick={() => handleChangeSelection('fifteen', 15)}
					$selected={ctx!.parameters.selected === 'fifteen'}
				>
					15%
				</RadioButton>
				<RadioButton
					id='twentifive'
					onClick={() => handleChangeSelection('twentifive', 25)}
					$selected={ctx!.parameters.selected === 'twentifive'}
				>
					25%
				</RadioButton>
				<RadioButton
					id='fifty'
					onClick={() => handleChangeSelection('fifty', 50)}
					$selected={ctx!.parameters.selected === 'fifty'}
				>
					50%
				</RadioButton>
				<TipInput
					id={'custom'}
					$selected={ctx!.parameters.selected === 'custom'}
					onValueChange={(e) => handleChangeSelection('custom', e.floatValue!)}
					value={tipPerc}
					allowNegative={false}
					placeholder='Custom'
				/>
			</Container>
		</>
	);
};

export default TipSelector;
