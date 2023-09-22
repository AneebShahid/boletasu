import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.section`
	position: relative;
	z-index: 0;
	overflow: hidden;
`;

const Wrapper = styled.div`
	height: 100vh;
	width: 92%;
	margin: auto;
	display: grid;
	align-items: center;

	@media (min-width: 601px) and (max-width: 1024px) {
		height: auto;
	}
`;

const BgImage = styled.img`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
	object-fit: cover;
	top: 0;
	left: 0;
`;

const TextContainer = styled.div`
	color: #fff;

	@media (max-width: 600px) {
		text-align: center;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 8rem 0;
	}
`;

const Header = styled.h1`
	font-size: 4rem;
	font-family: "WhyInkHeavy";

	@media (max-width: 600px) {
		font-size: 3.5rem;
		line-height: 1.4;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2.2rem;
	}
`;

const Description = styled.p`
	font-size: 1.4rem;
	font-family: "Montserrat";
	margin-top: 1rem;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1.15rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

export default function HeroWithButton({ header, description1, description2, image }) {
	return (
		<Container>
			<BgImage src={image} alt={header} height='auto' width='auto' loading='lazy' />
			<Wrapper>
				<TextContainer>
					<Header>{header}</Header>
					<Description>
						{description1}
						<br />
						{description2}
					</Description>
				</TextContainer>
			</Wrapper>
		</Container>
	);
}
