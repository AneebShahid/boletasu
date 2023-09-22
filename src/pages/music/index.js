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
	musicTrendingSliderData,
	musicCategorySliderData,
	regConcertSliderData,
	popConcertSliderData,
	rockConcertSliderData,
} from "../../components/json/sliderData";

// style
const Main = styled.main`
	padding-bottom: 8rem;
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Boletaso | Music Page</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Main>
				{/* Hero */}
				<HeroWithButton
					header='Concert Ticket'
					image='/images/banner/musicMain.png'
					description1='Tickets to your favorite concerts.'
					description2='All right here. Let&#39;s go.'
				/>
				{/* Trending Slider */}
				<TrendingSlider
					sliderHeader='Trending Events near you'
					sliderData={musicTrendingSliderData}
					sliderRef='musicTrendSlider'
				/>
				{/* Browse Location DropDown Menu */}
				<BrowseDropdown />
				{/* Category Slider */}
				<CategorySlider
					sliderHeader='Categories'
					sliderData={musicCategorySliderData}
					sliderRef='musicCategoriesSlider'
				/>

				{/* Reggaeton Slider */}
				<SliderWithTextAndPrice
					idTag='musicReggaeton'
					sliderHeader='Reggaeton'
					sliderData={regConcertSliderData}
					sliderRef='musicConcertSlider'
				/>
				{/* Rock Slider */}
				<SliderWithTextAndPrice
					idTag='musicRock'
					sliderHeader='Rock'
					sliderData={rockConcertSliderData}
					sliderRef='musicComedySlider'
				/>

				{/* Pop Slider */}
				<SliderWithTextAndPrice
					idTag='musicPop'
					sliderHeader='Pop'
					sliderData={popConcertSliderData}
					sliderRef='musicComedySlider'
				/>
			</Main>
		</>
	);
}
