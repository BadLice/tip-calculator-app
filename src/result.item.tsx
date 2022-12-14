import styled from 'styled-components';

type ResultItemProps = {
	mainText: string;
	secondaryText: string;
	value: number;
};

const Container = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: row;
`;

const TextContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

const PrimaryText = styled.span`
	color: ${({ theme }) => theme.colors.text.result.primary};
	width: 100%;
	font-size: 0.813rem;
`;

const SecondaryText = styled.span`
	color: ${({ theme }) => theme.colors.text.result.secondary};
	width: 100%;
	font-size: 0.625rem;
`;

const Value = styled.span`
	width: 100%;
	text-align: right;
	font-size: 1.875rem;
	color: ${({ theme }) => theme.colors.text.result.value};
	font-weight: bold;
`;

function ResultItem({ mainText, secondaryText, value }: ResultItemProps) {
	return (
		<Container>
			<TextContainer>
				<PrimaryText>{mainText}</PrimaryText>
				<SecondaryText>{secondaryText}</SecondaryText>
			</TextContainer>
			<Value>${value.toFixed(2)}</Value>
		</Container>
	);
}

export default ResultItem;
