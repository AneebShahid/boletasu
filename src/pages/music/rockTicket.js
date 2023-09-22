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
import { RockTrendingData, RockCategoryData } from "@/components/json/MusicData";
import { avatarLessData } from "@/components/json/AvatarData";
import { rockEventData } from "@/components/json/EventData";

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
				<title>Boletaso | Rock Music</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* Hero Page */}
				<PageTicketHero
					header='Rock Tickets'
					description='From Buddy Holly and Elvis Presley, rock music began to make waves in the early 1940s and 50s. The term “rock and roll” is said to have been attributed to Alan Freed, a disc jockey who was based in Cleveland, Ohio.'
					image='/images/musicPage/banner/Rock.png'
				/>

				{/* Trending Slider */}
				<TrendingSliderWithoutImage
					sliderHeader='Events near American Fork, UT'
					sliderData={RockTrendingData}
					sliderRef='musicRockTrendSlider'
				/>

				{/* Category Slider */}
				<ImageSliderNoDetail
					sliderHeader='Popular Rock Shows'
					sliderData={RockCategoryData}
					sliderRef='musicRockCategoriesSlider'
				/>

				{/* Grid Events and Performer*/}
				<Container>
					<Wrapper>
						<GridContainer>
							<Grid container spacing={8} justifyContent='space-between'>
								<Grid item xs={12} sm={8} md={8}>
									<EventContainer>
										<EventList sectionHeader='All Shows' dataList={rockEventData} />
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
