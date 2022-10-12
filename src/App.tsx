import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import './App.css';
import NumberInput from './input';
import TipSelector from './tip.selector';

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

const Result = styled.div({
	width: '50%',
	height: '100%',
	borderRadius: 20,
	backgroundColor: '#1b494d',
});

const Interactive = styled.div`
	width: 50%;
	height: 100%;
	border-radius: 20px;
	flex-grow: 2;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Space Mono', 'monospace'],
			},
		});
	}, []);

	const [tip, setTip] = useState<number | null>(null);

	return (
		<>
			<GlobalStyle />
			<CenterContainer>
				<Wrapper>
					<Interactive>
						<div>
							<NumberInput
								label='Bill'
								path='./icon-dollar.svg'
								allowNegative={false}
								decimalScale={2}
							/>
						</div>
						<TipSelector tip={tip!} setTip={setTip} />
					</Interactive>
					<Result></Result>
				</Wrapper>
			</CenterContainer>
		</>
	);
}

export default App;
