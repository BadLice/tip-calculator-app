import styled from 'styled-components';
import './App.css';

const Container = styled.div`
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
	font-size: 20px;
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
