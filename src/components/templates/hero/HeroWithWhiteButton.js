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
	width: 50%;

	@media (max-width: 600px) {
		text-align: center;
		width: 100%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 8rem 0;
	}
`;

const Header = styled.h1`
	font-size: 4rem;
	font-family: "WhyInkHeavy";

	@media (max-width: 600px) {
		font-size: 2.4rem;
		line-height: 1.4;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 2rem;
	}
`;

const Description = styled.p`
	font-size: 1.4rem;
	font-family: "Montserrat";
	margin-top: 1rem;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1.1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

const ButtonBox = styled.div`
	margin-top: 2rem;

	@media (max-width: 600px) {
		margin-top: 3rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const Button = styled.button`
	background-color: #fff;
	color: #000;
	font-size: 1.2rem;
	font-weight: 500;
	padding: 0.9rem 4rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: var(--buttonHover);
		color: #fff;
	}
	@media (max-width: 600px) {
		width: 80%;
		margin: auto;
		padding: 1rem 0;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
		padding: 0.8rem 2.5rem;
	}
`;

export default function HeroWithButton({ header, description, image, link, buttonText }) {
	return (
		<Container>
			<BgImage src={image} alt={header} height='auto' width='auto' loading='lazy' />
			<Wrapper>
				<TextContainer>
					<Header>{header}</Header>
					<Description>{description}</Description>
					<ButtonBox>
						<Link href={link}>
							<Button>{buttonText}</Button>
						</Link>
					</ButtonBox>
				</TextContainer>
			</Wrapper>
		</Container>
	);
}
