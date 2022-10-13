import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import { TipContext } from './contexts/tip.context';
import NumberInput from './input';
import TipSelector from './tip.selector';

const Container = styled.div`
	width: 50%;
	height: 100%;
	border-radius: 20px;
	flex-grow: 2;
	display: flex;
	flex-direction: column;
	gap: 9%;
`;

const Interactive = () => {
	const isValidNumber = (value: number) =>
		value === undefined || value === null || value > 0 ? true : `Can't be zero`;

	const ctx = useContext(TipContext);

	return (
		<Container>
			<NumberInput
				label='Bill'
				iconPath='./assets/icon-dollar.svg'
				allowNegative={false}
				decimalScale={2}
				isValid={isValidNumber}
				onValueChange={(e) => ctx!.setParameters({ bill: e.floatValue! })}
				value={ctx!.parameters.bill}
			/>
			<TipSelector />
			<NumberInput
				label='Number of People'
				iconPath='./assets/icon-person.svg'
				allowNegative={false}
				decimalScale={2}
				isValid={isValidNumber}
				onValueChange={(e) => ctx!.setParameters({ numPeople: e.floatValue! })}
				value={ctx!.parameters.numPeople}
			/>
		</Container>
	);
};

export default Interactive;
