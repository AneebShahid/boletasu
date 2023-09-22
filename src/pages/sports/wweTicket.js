import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styled from "styled-components";
import { Grid } from "@mui/material";

// component
const PageTicketHero = dynamic(() => import("@/components/templates/hero/PageTicketHero"));
const GamesList = dynamic(() => import("@/components/pageSection/GamesList"));
const EventList = dynamic(() => import("@/components/pageSection/EventList"));

// Json Data
import { sportGamesListData } from "@/components/json/moreData";
import { wweGameEventData } from "@/components/json/EventData";

// styles
const Container = styled.section`
	padding: 2rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 0;
	}
`;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;
`;

const HeaderBox = styled.div`
	margin-bottom: 1.5rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 1rem;
	}
`;

const GridContainer = styled.div``;

const EventContainer = styled.div``;

const PerformerContainer = styled.div``;

export default function WweTicket() {
	return (
		<>
			<Head>
				<title>Boletaso | WWE Ticket</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* Hero Page */}
				<PageTicketHero
					header='Basketball Tickets'
					description='WWE Raw, also known as Monday Night Raw or Raw, is the televised show on Monday nights. WWE Live is the non-televised house show.'
					image='/images/sportPage/banner/wweMain.png'
				/>

				{/* Grid Events and Performer*/}
				<Container>
					<Wrapper>
						<GridContainer>
							<Grid container spacing={8} justifyContent='space-between'>
								<Grid item xs={12} sm={8} md={8}>
									<EventContainer>
										<EventList sectionHeader='Events' dataList={wweGameEventData} />
									</EventContainer>
								</Grid>
								<Grid item xs={12} sm={4} md={4}>
									<PerformerContainer>
										<GamesList sectionHeader='All Games' dataList={sportGamesListData} />
									</PerformerContainer>
								</Grid>
							</Grid>
						</GridContainer>
					</Wrapper>
				</Container>
			</main>
		</>
	);
}
