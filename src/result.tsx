import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './button';
import { TipContext } from './contexts/tip.context';
import ResultItem from './result.item';

const Container = styled.div`
	/* padding-top: 5%; */
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 5%;
	width: 50%;
	height: 100%;
	border-radius: 20px;
	background-color: #1b494d;
	/* padding-right: 5%; */
	/* padding-left: 5%; */
`;

const Wrapper = styled.div`
	padding-right: 7%;
	padding-left: 7%;
	padding-top: 12%;
`;

const ResetButton = styled(Button)`
	width: 100%;
	margin-top: 20%; //???? è sbagliato
`;

const Result = () => {
	const ctx = useContext(TipContext);

	return (
		<Container>
			<Wrapper>
				<ResultItem
					mainText='Tip amount'
					secondaryText='/ person'
					value={ctx!.results.tip}
				/>
				<ResultItem
					mainText='Total'
					secondaryText='/ person'
					value={ctx!.results.total}
				/>
				<ResetButton onClick={() => ctx!.reset()}>Reset</ResetButton>
			</Wrapper>
		</Container>
	);
};

export default Result;
