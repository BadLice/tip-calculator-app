// styled.d.ts
import 'styled-components';
interface IPalette {
	main: string;
	contrastText: string;
}
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: {
				default: string;
				card: string;
				button: {
					default: string;
					active: string;
				};
				input: {
					default: string;
				};
			};
			text: {
				default: string;
				error: string;
				result: {
					primary: string;
					secondary: string;
					value: string;
				};
				button: {
					default: string;
					active: string;
				};
				input: {
					default: string;
					placeholder: string;
				};
			};
			border: {
				input: {
					error: string;
					default: string;
					focus: string;
				};
			};
		};
	}
}
