import Head from "next/head";
import dynamic from "next/dynamic";
import styled from "styled-components";

// component
const HeroWithButton = dynamic(() => import("@/components/templates/hero/Hero"));
const TrendingSlider = dynamic(() => import("@/components/templates/Slider/TrendingSlider"));
const BrowseDropdown = dynamic(() => import("@/components/home/BrowseDropdown"));
const CategorySlider = dynamic(() => import("@/components/templates/Slider/CategorySlider"));
const SliderWithTextAndPrice = dynamic(() => import("@/components/templates/SliderWithTextAndPrice"));

// Data
import {
	moreTrendingSliderData,
	moreCategorySliderData,
	moreComedySliderData,
	moreFestivalSliderData,
	moreTheatreSliderData,
} from "../../components/json/sliderData";

// style
const Main = styled.main`
	padding-bottom: 8rem;
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Boletaso | More Page</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Main>
				{/* Hero */}
				<HeroWithButton
					header=' More Tickets'
					image='/images/banner/moreMain.png'
					description1='Tickets to your favorite concerts.'
					description2='All right here. Let&#39;s go.'
				/>
				{/* Trending Slider */}
				<TrendingSlider
					sliderHeader='Trending Events near you'
					sliderData={moreTrendingSliderData}
					sliderRef='musicTrendSlider'
				/>
				{/* Browse Location DropDown Menu */}
				<BrowseDropdown />
				{/* Category Slider */}
				<CategorySlider
					sliderHeader='Categories'
					sliderData={moreCategorySliderData}
					sliderRef='musicCategoriesSlider'
				/>

				{/* Comedy Slider */}
				<SliderWithTextAndPrice
					idTag='moreComedy'
					sliderHeader='Comedy'
					sliderData={moreComedySliderData}
					sliderRef='musicConcertSlider'
				/>
				{/* Festival Slider */}
				<SliderWithTextAndPrice
					idTag='moreFestival'
					sliderHeader='Festival'
					sliderData={moreFestivalSliderData}
					sliderRef='musicComedySlider'
				/>

				{/* Theatre Slider */}
				<SliderWithTextAndPrice
					idTag='moreTheatre'
					sliderHeader='Theatre'
					sliderData={moreTheatreSliderData}
					sliderRef='musicComedySlider'
				/>
			</Main>
		</>
	);
}
