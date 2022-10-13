import { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import './App.css';
import { TipProvider } from './contexts/tip.context';
import Interactive from './interactive';
import Result from './result';

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

const CenterContainer = styled.div({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
});

const Wrapper = styled.div({
	maxWidth: 700,
	maxHeight: 350,
	width: '72%',
	height: '42%',
	padding: 20,
	borderRadius: 20,
	backgroundColor: 'white',
	display: 'flex',
	flexDirection: 'row',
	gap: 30,
});

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
