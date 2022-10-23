import styled from 'styled-components';

const Container = styled.h1`
	width: 100%;
	height: 100px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	letter-spacing: 5px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text.input.default};
	font-size: 1.25rem;
`;

const Splitter = () => {
	return (
		<Container>
			<div>SPLI</div>
			<div>TTER</div>
		</Container>
	);
};

export default Splitter;
