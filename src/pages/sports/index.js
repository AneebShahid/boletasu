import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";

// component
const HeroWithButton = dynamic(() => import("@/components/templates/hero/Hero"));
const TrendingSlider = dynamic(() => import("@/components/templates/Slider/TrendingSlider"));
const BrowseDropdown = dynamic(() => import("@/components/home/BrowseDropdown"));
const CategorySlider = dynamic(() => import("@/components/templates/Slider/CategorySlider"));
const SliderWithTextAndPrice = dynamic(() => import("@/components/templates/SliderWithTextAndPrice"));
// Data
import {
	moreTrendingSliderData,
	sportCategorySliderData,
	sportsBasketballSliderData,
	sportsBaseballSliderData,
	sportsBoxingSliderData,
} from "../../components/json/sliderData";

// style
const Main = styled.main`
	padding-bottom: 8rem;
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Boletaso | Sports Page</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Main>
				{/* Hero */}
				<HeroWithButton
					header=' Stadium Tickets'
					image='/images/banner/sportMain.png'
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
					sliderData={sportCategorySliderData}
					sliderRef='musicCategoriesSlider'
				/>

				{/* Basket Slider */}
				<SliderWithTextAndPrice
					idTag='sportsBasketball'
					sliderHeader='Basketball'
					sliderData={sportsBasketballSliderData}
					sliderRef='musicConcertSlider'
				/>
				{/* Baseball Slider */}
				<SliderWithTextAndPrice
					idTag='sportsBaseball'
					sliderHeader='Baseball'
					sliderData={sportsBaseballSliderData}
					sliderRef='musicComedySlider'
				/>

				{/* Theatre Slider */}
				<SliderWithTextAndPrice
					idTag='sportsBoxing'
					sliderHeader='Boxing'
					sliderData={sportsBoxingSliderData}
					sliderRef='musicComedySlider'
				/>
			</Main>
		</>
	);
}
