import React, { useEffect, useContext } from "react";
import StateContext from "@/context/StateContext";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

// component
import HeaderWithSearch from "@/components/user/HeaderWithSearchComponent";
import MediumHeader from "@/components/templates/textTemplate/MediumHeader";
import DescriptionMont from "@/components/templates/textTemplate/DescriptionMont";
import FullSolidButton from "@/components/templates/button/FullSolidButton";

// styles
const Container = styled.section``;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;
	padding: 6rem 0;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 4rem 0 6rem 0;
	}
`;

const TextBox = styled.div`
	text-align: center;
	width: 50%;
	margin: auto;
	padding: 4rem 0;

	@media (max-width: 600px) {
		padding: 2rem 0;
		width: 100%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 70%;
		padding: 2rem 0;
	}
`;

const DescriptionBox = styled.div`
	margin-top: 2rem;
`;

const ButtonBox = styled.div`
	padding: 0.5rem;
	margin-top: 4rem;

	@media (max-width: 600px) {
		margin-top: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

const ActionBox = styled.div`
	margin-top: 1rem;
`;

const ActionText = styled.p`
	color: #000;
	font-size: 0.95rem;
	font-family: "Montserrat";
	opacity: 0.9;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.9rem;
	}
`;

const ActionLink = styled.a`
	color: var(--purpleColor);
	font-size: 0.95rem;
	font-family: "Montserrat";
	font-weight: 700;
	opacity: 0.9;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.9rem;
	}
`;

export default function UserLogin() {
	const { setNavLightTheme } = useContext(StateContext);

	useEffect(() => {
		setNavLightTheme(false);
	}, []);

	return (
		<>
			<Head>
				<title>Boletaso | User Login Ticket </title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Wrapper>
					<HeaderWithSearch header='Sell your Tickets' description='Sell Now' />

					<TextBox>
						<MediumHeader>Log into your Vivid Seats account</MediumHeader>
						<DescriptionBox>
							<DescriptionMont>
								<strong>Note:</strong> If you use our site to purchase tickets, you don&#39;t need a
								separate account to sell tickets with us.
							</DescriptionMont>
						</DescriptionBox>

						<ButtonBox>
							<Link href='/user/enterTicketDetail'>
								<FullSolidButton>Continue</FullSolidButton>
							</Link>
						</ButtonBox>

						<ActionBox>
							<ActionText>
								Don&#39;t have an account? <ActionLink href='/'>Create one</ActionLink>
							</ActionText>
						</ActionBox>
					</TextBox>
				</Wrapper>
			</Container>
		</>
	);
}
