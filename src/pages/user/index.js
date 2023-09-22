import React, { useEffect, useContext } from "react";
import StateContext from "@/context/StateContext";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { Grid } from "@mui/material";

// component
import UserHeaderWithSearch from "@/components/user/UserHeaderWithSearchComponent";

// styles
const Container = styled.section`
	padding: 4rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 0;
	}
`;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;
`;

const GridContainer = styled.div`
	padding: 1rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 4rem 0;
	}
`;

const GridWrapper = styled.div`
	padding: 2rem;

	@media (max-width: 600px) {
		padding: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem;
	}
`;

const GridBox = styled.div`
	padding: 3rem;
	border-radius: 1rem;
	box-shadow: rgba(0, 0, 0, 0.05) 3px 10px 40px;
	cursor: pointer;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: translateY(-5px);
	}
	@media (max-width: 600px) {
		padding: 1rem;
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem;
	}
`;

const GridTitle = styled.p`
	color: #000;
	font-size: 1.5rem;
	font-family: "WhyInkHeavy";

	@media (max-width: 600px) {
		font-size: 1.3rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.9rem;
	}
`;

const GridDescription = styled.p`
	width: 70%;
	font-family: "Montserrat";
	margin-top: 1rem;
	line-height: 1.5;

	@media (max-width: 600px) {
		font-size: 0.95rem;
		width: 100%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.65rem;
	}
`;

export default function MyTicket() {
	const { setNavLightTheme } = useContext(StateContext);

	useEffect(() => {
		setNavLightTheme(false);
	}, []);

	const gridData = [
		{
			title: "Personal info",
			description: "Edit and verify your personal details.",
			link: "/user/myTicket",
		},
		{
			title: "Login & security",
			description: "Update password and secure your account.",
			link: "/user/userLogin",
		},
		{
			title: "Payments & shipping",
			description: "Manage your payment, delivery and payout information.",
			link: "/user/setUpPayment",
		},
		{
			title: "Notifications",
			description: "Let us know what kinds of messages you'd like to receive.",
			link: "/user/selectEvent",
		},
		{
			title: "Log out",
			description: "Sign-out from this device",
			link: "/",
		},
	];

	return (
		<>
			<Head>
				<title>Boletaso | User Account </title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Wrapper>
					<UserHeaderWithSearch name='Wilson' />

					<GridContainer>
						<Grid container justifyContent='space-between' spacing={4}>
							{gridData.map((item, index) => (
								<Grid item xs={12} sm={6} md={6} key={index}>
									<GridWrapper>
										<Link href={item.link}>
											<GridBox>
												<GridTitle>{item.title}</GridTitle>
												<GridDescription>{item.description}</GridDescription>
											</GridBox>
										</Link>
									</GridWrapper>
								</Grid>
							))}
						</Grid>
					</GridContainer>
				</Wrapper>
			</Container>
		</>
	);
}
