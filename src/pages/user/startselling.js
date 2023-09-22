import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { Grid } from "@mui/material";

import { Paper, InputBase, IconButton } from "@mui/material";

// icons
import SearchIcon from "@mui/icons-material/Search";

// component
import HeroWithButton from "@/components/templates/hero/HeroWithWhiteButton";

// style
const Container = styled.section``;

const Wrapper = styled.div``;

const SearchContainer = styled.div`
	background-color: #000000;
	padding: 5rem 0;
`;

const SearchWrapper = styled.div`
	text-align: center;

	@media (max-width: 600px) {
		width: 90%;
		margin: auto;
	}
`;

const SearchHeaderTextBox = styled.div``;

const SearchHeaderText = styled.p`
	color: #fff;
	font-size: 2.5rem;
	font-family: "WhyInkHeavy";

	@media (max-width: 600px) {
		font-size: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.4rem;
	}
`;

const SearchBarBox = styled.div`
	margin-top: 3rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

const GridContainer = styled.div`
	padding: 7rem 0;

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
	font-family: "Montserrat";
	margin-top: 1rem;
	line-height: 1.5;

	@media (max-width: 600px) {
		font-size: 0.95rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.65rem;
	}
`;

export default function StartSelling() {
	const gridData = [
		{
			title: "Low & transparent fees",
			description:
				"See exactly how much you’ll get paid when you list. We keep our seller fees low, so you take home more money.",
		},
		{
			title: "Reach millions of fans",
			description: "Get access to millions of fans who are already browsing and buying tickets on SeatGeek.",
		},
		{
			title: "List in a couple of taps",
			description:
				"We’ll fill in all the necessary info when you upload your tickets. Just tell us how much you want for them.",
		},
	];

	return (
		<>
			<Head>
				<title>Boletaso | Start Selling </title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HeroWithButton
				header='Sell your seats where the fans are'
				image='/images/banner/startSellingMain.png'
				description='Upload tickets, set a price and get paid. Our transparent pricing means more money in your pocket.'
				buttonText='Start Selling'
				link='/'
			/>

			<Container>
				<Wrapper>
					<SearchContainer>
						<SearchWrapper>
							<SearchHeaderTextBox>
								<SearchHeaderText>Sell your tickets now</SearchHeaderText>
							</SearchHeaderTextBox>

							<SearchBarBox>
								<Paper
									sx={{
										p: "2px 4px",
										display: "flex",
										alignItems: "center",
										width: { xs: 320, md: 360, md: 400 },
										backgroundColor: "#fff",
										borderRadius: "2rem",

										margin: "auto",
									}}
								>
									<IconButton sx={{ p: "10px" }} aria-label='menu'>
										<SearchIcon sx={{ color: "#000" }} />
									</IconButton>
									<InputBase
										size='small'
										placeholder='Event, artist, team, or venue'
										sx={{
											ml: 0.5,
											flex: 1,
											color: "#000",
											fontFamily: "Montserrat",

											"&::placeholder": {},
											input: {
												"&::placeholder": {
													color: "#000",
													fontSize: { xs: "0.85rem", sm: "0.7rem", md: "0.85rem" },
													opacity: "1",
												},
											},
										}}
									/>
								</Paper>
							</SearchBarBox>
						</SearchWrapper>
					</SearchContainer>

					<GridContainer>
						<Grid container justifyContent='center'>
							{gridData.map((item, index) => (
								<Grid item xs={12} sm={5} md={5} key={index}>
									<GridWrapper>
										<GridBox>
											<GridTitle>{item.title}</GridTitle>
											<GridDescription>{item.description}</GridDescription>
										</GridBox>
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
