import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

type ButtonProps = {
	children?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
};

type RippleProps = React.HTMLProps<HTMLSpanElement> & {
	$height?: number;
	$width?: number;
	$left?: number;
	$top?: number;
};

type RippleState = RippleProps & {
	id: number;
};

const Btn = styled.button<ButtonProps>`
	width: 98px;
	height: 40px;
	background-color: #1b494d;
	color: #fff;
	border: none;
	border-radius: 5px;
	font-size: 20px;
	user-select: none;
	position: relative;
	overflow: hidden;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
	cursor: pointer;
`;

const ripple = keyframes`
    to {
        transform: scale(4);
        opacity: 0;
    }
`;

const Ripple = styled.span<RippleProps>`
	position: absolute;
	border-radius: 50%;
	transform: scale(0);
	animation: ${ripple} 600ms linear;
	background-color: rgba(255, 255, 255, 0.7);
	height: ${({ $height }) => $height ?? 0}px;
	width: ${({ $width }) => $width ?? 0}px;
	left: ${({ $left }) => $left ?? 0}px;
	top: ${({ $top }) => $top ?? 0}px;
`;

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
	const [ripples, setRipples] = useState<RippleState[]>([]);

	const createRipple = (e: React.MouseEvent<HTMLElement>) => {
		setRipples([]);
		const button = e.currentTarget;
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;
		const r = [
			...ripples,
			{
				id: ripples.length,
				$height: diameter,
				$width: diameter,
				$left: e.clientX - (button.offsetLeft + radius),
				$top: e.clientY - (button.offsetTop + radius),
			},
		];
		setRipples(r as RippleState[]);
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		createRipple(e);
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<Btn {...rest} onClick={handleClick}>
			{ripples.map(({ $height, $width, $left, $top, id }) => (
				<Ripple key={id} $height={$height} $width={$width} $left={$left} $top={$top} />
			))}
			{children}
		</Btn>
	);
};

export default Button;
