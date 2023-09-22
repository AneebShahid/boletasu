import Head from "next/head";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// component
const HeroWithButton = dynamic(() => import("@/components/templates/hero/HomePageHero"));
const TrendingSlider = dynamic(() => import("@/components/templates/Slider/TrendingSliderHome"));
const BrowseDropdown = dynamic(() => import("@/components/home/BrowseDropdown"));
const ImageSliderNoDetail = dynamic(() => import("@/components/templates/Slider/ImageSliderNoDetail"));
const CategorySlider = dynamic(() => import("@/components/templates/Slider/CategorySlider"));
const SliderWithTextAndPrice = dynamic(() => import("@/components/templates/SliderWithTextAndPrice"));

// Data
import {
	homeTrendingSliderData,
	homeCategorySliderData,
	homePopularSliderData,
	homeConcertSliderData,
	homeComedySliderData,
} from "../components/json/sliderData";

// style
const Main = styled.main`
	padding-bottom: 8rem;
`;

export default function Home() {
	const { t } = useTranslation();
	return (
		<>
			<Head>
				<title>Boletaso | HomePage</title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Main>
				{/* Hero */}
				<HeroWithButton image='/images/banner/heroMain.png' link='/' />
				{/* Trending Slider */}
				<TrendingSlider
					sliderHeader='Trending Events'
					sliderData={homeTrendingSliderData}
					sliderRef='homeTrendSlider'
				/>
				{/* Browse Location DropDown Menu */}
				<BrowseDropdown />
				{/* Category Slider */}
				<CategorySlider
					sliderHeader='Categories'
					sliderData={homeCategorySliderData}
					sliderRef='homeCategoriesSlider'
				/>
				{/* ImageSlider No Detail */}
				<ImageSliderNoDetail
					sliderHeader='Popular MLB Teams'
					sliderData={homePopularSliderData}
					sliderRef='homePopularSlider'
				/>
				{/* Concert Slider */}
				<SliderWithTextAndPrice
					sliderHeader='Concerts'
					sliderData={homeConcertSliderData}
					sliderRef='homeConcertSlider'
				/>
				{/* Comedy Slider */}
				<SliderWithTextAndPrice
					sliderHeader='Comedy'
					sliderData={homeComedySliderData}
					sliderRef='homeComedySlider'
				/>
			</Main>
		</>
	);
}
