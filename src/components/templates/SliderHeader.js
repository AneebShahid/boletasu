import React from "react";
import styled from "styled-components";

const Text = styled.p`
	color: ${(props) => (props.light === "true" ? "#fff" : "#464646")};
	font-size: 1.4rem;
	font-weight: ${(props) => (props.bold === "true" ? "600" : "400")};

	@media (max-width: 600px) {
		font-size: 1.1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1rem;
	}
`;

const Line = styled.hr`
	background-color: #3e39d1;
	width: 7%;
	height: 5px;
	border: none;
	margin-top: 0.2rem;

	@media (max-width: 600px) {
		width: 20%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		height: 3px;
	}
`;

export default function SliderHeader({ children, light, bold }) {
	return (
		<>
			<Text light={String(light)} bold={String(bold)}>
				{children}
			</Text>
			<Line />
		</>
	);
}
