import { useContext } from 'react';
import styled from 'styled-components';
import Button from './button';
import { TipContext } from './contexts/tip.context';
import ResultItem from './result.item';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 5%;
	width: 50%;
	height: 100%;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.background.button.default};

	@media (max-width: 700px) {
		width: 100%;
		max-height: 250px;
		flex: 1 0;
	}
`;

const Wrapper = styled.div`
	padding-right: 7%;
	padding-left: 7%;
	padding-top: 12%;

	@media (max-width: 700px) {
		height: 100%;
		flex: 1 0;
		min-height: 320px;
	}
`;

const ResetButton = styled(Button)`
	width: 100%;
	margin-top: 25%;
	background-color: ${({ theme }) => theme.colors.background.button.active};
	color: ${({ theme }) => theme.colors.text.button.active};

	&:active {
		background-color: ${({ theme }) => theme.colors.background.button.default};
		color: ${({ theme }) => theme.colors.text.button.default};
	}

	@media (max-width: 700px) {
		margin-top: 0%;
	}
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
				<ResetButton onClick={() => ctx!.reset()}>RESET</ResetButton>
			</Wrapper>
		</Container>
	);
};

export default Result;
