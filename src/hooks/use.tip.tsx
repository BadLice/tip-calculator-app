import { useEffect, useState } from 'react';

export type TipContextType = {
	parameters: ParametersType;
	setParameters: (v: Partial<ParametersType>) => void;
	results: ResultsType;
	reset: () => void;
};

type ResultsType = {
	tip: number;
	total: number;
};

type ParametersType = {
	selected: number | string | null;
	tipPerc: number | string | null;
	bill: number | string | null;
	numPeople: number | string | null;
};

const useTip = (): TipContextType => {
	const [parameters, setParametersV] = useState<ParametersType>({
		selected: null,
		tipPerc: null,
		bill: null,
		numPeople: null,
	});
	const [results, setResults] = useState<ResultsType>({
		tip: 0,
		total: 0,
	});

	useEffect(() => {
		const b = (parameters.bill as number) ?? 0;
		const p = (parameters.tipPerc as number) ?? 0;
		const n = (parameters.numPeople as number) ?? 0;

		let tip = ((b / 100) * p) / n;
		let total = b / n + tip;

		tip = isNaN(tip) || tip === Infinity ? 0 : Math.round(tip * 100) / 100;
		total = isNaN(total) || total === Infinity ? 0 : Math.round(total * 100) / 100;

		setResults({ tip, total });
	}, [parameters]);

	const reset = () => {
		setParameters({
			selected: '',
			tipPerc: '',
			bill: '',
			numPeople: '',
		});
		setResults({
			tip: 0,
			total: 0,
		});
	};

	const setParameters = (v: Partial<ParametersType>) => {
		setParametersV((p) => ({ ...p, ...v }));
	};

	return {
		parameters,
		setParameters,
		results,
		reset,
	};
};

export default useTip;
