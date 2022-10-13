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

const MainText = styled.span`
	color: white;
	width: 100%;
	font-size: 13px;
`;

const SecondaryText = styled.span`
	color: #79a3a7;
	width: 100%;
	font-size: 10px;
`;

const Value = styled.span`
	width: 100%;
	text-align: right;
	font-size: 30px;
	color: #4fc0ac;
	font-weight: bold;
`;

function ResultItem({ mainText, secondaryText, value }: ResultItemProps) {
	return (
		<Container>
			<TextContainer>
				<MainText>{mainText}</MainText>
				<SecondaryText>{secondaryText}</SecondaryText>
			</TextContainer>
			<Value>${value.toFixed(2)}</Value>
		</Container>
	);
}

export default ResultItem;
