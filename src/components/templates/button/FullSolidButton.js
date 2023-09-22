import React from "react";
import styled from "styled-components";

const Button = styled.div`
	background-color: var(--purpleColor);
	color: #fff;
	font-size: 1.05rem;
	padding: 0.9rem 0;
	text-align: center;
	border-radius: 0.3rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: var(--buttonHover);
	}
	@media (max-width: 600px) {
		margin: auto;
		padding: 1rem 0;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
		padding: 0.9rem 3rem;
	}
`;

export default function FullSolidButton({ children }) {
	return <Button>{children}</Button>;
}
