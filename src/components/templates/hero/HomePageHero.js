import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.section`
	position: relative;
	z-index: 0;
	overflow: hidden;
`;

const Wrapper = styled.div`
	/* height: 100vh; */
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
	z-index: -2;
	width: 100%;
	height: 100%;
	object-fit: cover;
	top: 0;
	left: 0;
`;

const TextContainer = styled.div`
	color: #fff;
	padding: 8rem 0;

	@media (max-width: 600px) {
		text-align: center;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 6rem 0;
	}
`;

const Header = styled.h1`
	font-size: 4rem;
	font-family: "WhyInkHeavy";

	@media (max-width: 600px) {
		font-size: 3.5rem;
		line-height: 1.2;
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

const ButtonBox = styled.div`
	margin-top: 2rem;

	@media (max-width: 600px) {
		margin-top: 3rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const Button = styled.button`
	background-color: var(--purpleColor);
	color: #fff;
	font-size: 1.2rem;
	padding: 0.9rem 6rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: var(--buttonHover);
	}
	@media (max-width: 600px) {
		width: 80%;
		margin: auto;
		padding: 1rem 0;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
		padding: 0.9rem 3rem;
	}
`;

const MobileOverlay = styled.div`
	display: none;

	@media (max-width: 600px) {
		display: block;
		background-color: rgb(0, 0, 0, 0.4);
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export default function HeroHome({ header, description, image, link }) {
	const { t } = useTranslation();

	return (
		<Container>
			<MobileOverlay />
			<BgImage
				src='/images/banner/heroMain.png'
				alt='Let there be live'
				height='auto'
				width='auto'
				loading='lazy'
			/>
			<Wrapper>
				<TextContainer>
					<Header>{t("HomePage.HeroSection.Header")}</Header>
					<Description>
						Your next best-night-ever is waiting.
						<br />
						And we have the tickets.
					</Description>
					<ButtonBox>
						<Link href='/user/startselling'>
							<Button>Get Started</Button>
						</Link>
					</ButtonBox>
				</TextContainer>
			</Wrapper>
		</Container>
	);
}
