import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styled from "styled-components";
import { Grid } from "@mui/material";

// component
const PageTicketHero = dynamic(() => import("@/components/templates/hero/PageTicketHero"));
const TrendingSliderWithoutImage = dynamic(() => import("@/components/templates/Slider/TrendingSliderWithoutImage"));
const ImageSliderNoDetail = dynamic(() => import("@/components/templates/Slider/ImageSliderNoDetail"));
const PerformerList = dynamic(() => import("@/components/pageSection/PerformerList"));
const EventList = dynamic(() => import("@/components/pageSection/EventList"));

// Json Data
import { SalsaTrendingData, SalsaCategoryData } from "@/components/json/MusicData";
import { avatarLessData } from "@/components/json/AvatarData";
import { salsaEventData } from "@/components/json/EventData";

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

export default function RaggaeTicket() {
	return (
		<>
			<Head>
				<title>Boletaso | Pop Music</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* Hero Page */}
				<PageTicketHero
					header='Salsa Tickets'
					description='Salsa is a partnered dance where the lead takes the follower through a series of spins and turn patterns to music. Salsa tempo ranges from about 150bpm (beats per minute) to around 250bpm, although most dancing is done to music somewhere between 160 and 220bpm.'
					image='/images/musicPage/banner/Pop.png'
				/>

				{/* Trending Slider */}
				<TrendingSliderWithoutImage
					sliderHeader='Events near American Fork, UT'
					sliderData={SalsaTrendingData}
					sliderRef='musicSalsaTrendSlider'
				/>

				{/* Category Slider */}
				<ImageSliderNoDetail
					sliderHeader='Popular Salsa Shows'
					sliderData={SalsaCategoryData}
					sliderRef='musicSalsaCategoriesSlider'
				/>

				{/* Grid Events and Performer*/}
				<Container>
					<Wrapper>
						<GridContainer>
							<Grid container spacing={8} justifyContent='space-between'>
								<Grid item xs={12} sm={8} md={8}>
									<EventContainer>
										<EventList sectionHeader='All Shows' dataList={salsaEventData} />
									</EventContainer>
								</Grid>
								<Grid item xs={12} sm={4} md={4}>
									<PerformerContainer>
										<PerformerList sectionHeader='Top Artists' dataList={avatarLessData} />
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
