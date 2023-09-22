import React from "react";
import styled from "styled-components";

const Text = styled.p`
	color: #464646;
	font-size: 1.8rem;
	font-family: "WhyInkHeavy";
	line-height: 1.5;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;

export default function MediumHeader({ children }) {
	return <Text>{children}</Text>;
}
