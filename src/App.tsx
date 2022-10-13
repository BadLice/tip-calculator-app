import { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import './App.css';
import { TipProvider } from './contexts/tip.context';
import Interactive from './interactive';
import Result from './result';
import Splitter from './splitter';

const GlobalStyle = createGlobalStyle`
  body,html {
    height: 100%;
	width: 100%;
	margin: 0;
    background-color: #c7e3e6;
  }
  * {
    box-sizing:border-box;
	font-family: 'Space Mono', monospace;

  }
`;

const CenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 5%;
	margin-top: -5%;

	@media (max-width: 700px) {
		justify-content: flex-end;
		margin-top: 0;
		gap: 2%;
		overflow: scroll;
	}
`;

const Wrapper = styled.div`
	max-width: 700px;
	min-width: 700px;
	max-height: 350px;
	min-height: 350px;
	width: 72%;
	height: 42%;
	padding: 20px;
	border-radius: 20px;
	background-color: white;
	display: flex;
	flex-direction: row;
	gap: 30px;

	@media (max-width: 700px) {
		max-width: 450px;
		flex-direction: column;
		min-width: 300px;
		width: 100%;
		min-height: 85%;
		border-radius: 20px 20px 0px 0px;
		flex: 1 0;
	}
`;

const App = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Space Mono', 'monospace'],
			},
		});
	}, []);

	return (
		<>
			<GlobalStyle />
			<CenterContainer>
				<Splitter />
				<Wrapper>
					<TipProvider>
						<Interactive />
						<Result />
					</TipProvider>
				</Wrapper>
			</CenterContainer>
		</>
	);
};

export default App;
