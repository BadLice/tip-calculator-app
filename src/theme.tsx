import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
	colors: {
		background: {
			default: '#c7e3e6',
			card: 'white',
			button: {
				default: '#1b494d',
				active: '#a7e7df',
			},
			input: {
				default: '#f3f8fb',
			},
		},
		text: {
			default: '#6f7879',
			error: '#d48f81',
			result: {
				primary: 'white',
				secondary: '#79a3a7',
				value: '#4fc0ac',
			},
			button: {
				default: 'white',
				active: '#1b494d',
			},
			input: {
				default: '#102e2d',
				placeholder: '#9cb1af',
			},
		},
		border: {
			input: {
				error: '#d48f81',
				default: '#64a59c',
				focus: '#64a59c',
			},
		},
	},
};

const Theme = ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
