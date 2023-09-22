import React from "react";
import styled from "styled-components";

const Text = styled.p`
	color: #000;
	font-size: 1.1rem;
	font-family: "Montserrat";
	font-weight: 500;
	opacity: 0.8;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

export default function MediumHeader({ children }) {
	return <Text>{children}</Text>;
}
