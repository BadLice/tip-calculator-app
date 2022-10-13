import { createContext } from 'react';
import useTip, { TipContextType } from '../hooks/use.tip';

type TipProviderProps = {
	children?: React.ReactNode;
};

export const TipContext = createContext<TipContextType | null>(null);

export const TipProvider = ({ children }: TipProviderProps) => {
	const value = useTip();

	return (
		<>
			<TipContext.Provider value={value}>{children}</TipContext.Provider>
		</>
	);
};
