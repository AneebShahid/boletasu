import { useState } from "react";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icon
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { homeTrendingSliderData } from "../../json/sliderData";

// component
import Header from "../SliderHeader";

// styles
const Container = styled.section`
  background-color: #000000;
  padding: 0 0 6rem 0;

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 0 0 3rem 0;
  }
`;

const Wrapper = styled.div`
  width: 92%;
  margin: auto;
`;

const HeaderBox = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 601px) and (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

const SliderContainer = styled.div``;

const SliderWrapper = styled.div`
  padding: 1rem;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
  }
`;

const SliderImageBox = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const SliderImageNumberBox = styled.div`
  background-color: #04032d;
  color: #fff;
  position: absolute;
  z-index: 1;
  top: -1%;
  right: -1%;
  padding: 0.5rem 1rem;
  border-radius: 0 0 0 1rem;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.5rem;
  }
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const SliderTextBox = styled.div`
  /* padding-top: 1rem; */

  @media (max-width: 600px) {
  }

  @media (min-width: 601px) and (max-width: 1024px) {
  }
`;

const SliderTextSplitBox = styled.div`
  color: #fff;
  /* display: flex;
	align-items: center;
	justify-content: space-between; */
  padding: 1rem 1rem;

  @media (max-width: 600px) {
  }

  @media (min-width: 601px) and (max-width: 1024px) {
  }
`;

const SliderTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 26ch;

  @media (max-width: 600px) {
    max-width: 17ch;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.75rem;
  }
`;

const SliderDetails = styled.p`
  color: #fff;
  font-size: 0.95rem;
  font-weight: 200;
  margin-top: 0.5rem;
  letter-spacing: 0.5px;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.6rem;
    margin-top: 0.3rem;
  }
`;

const SliderBox = styled.div`
  background-color: #201d6b;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  &:hover ${SliderImage} {
    scale: 1.06;
    transition: all 0.25s ease-out;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    border-radius: 0.5rem;
  }
`;

const PriceBox = styled.div`
  background-color: #04032d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 0.5rem;
  }
`;

const SliderPrice = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 400;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;

const SliderButtonContainer = styled.div`
  display: flex;
  width: 97%;
  margin: 2rem auto 0 auto;

  @media (max-width: 600px) {
    display: none;
  }
`;

const SliderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SliderButtonBox = styled.div`
  background-color: #8581ff;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 1;
`;

const SliderButtonDarkBox = styled.div`
  background-color: #3e39d1;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 1;
`;

export default function SliderWithTextAndPrice({ sliderData }) {
  // FETCH DATA
  const [FetchMyData, setFetchMyData] = useState([]);

  // COUNTRY STATE CITY
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();

  // FETCH DATA

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
      };
      const res = await fetch(
        "https://boletaso.sehatpk.com/api/event",
        options
      );
      const actualData = await res.json();
      setFetchMyData(actualData.events);
      console.log(actualData.events[0].country_id)

          // FETCH COUNTRY DATA
          const countryData = await fetch(
            "https://boletaso.sehatpk.com/public/api/country",
            options
            );
            const countyFetchData = await countryData.json();
            setCountry(countyFetchData.countries[actualData.events[0].country_id - 1].name)
            console.log(countyFetchData.countries[actualData.events[0].country_id - 1].name)
            
  
        // FETCH STATE DATA
        const StateData = await fetch(
          "https://boletaso.sehatpk.com/api/state",
                  options
            );
            const stateFetchData = await StateData.json();
            // console.log(stateFetchData.state)
            // console.log(FetchMyData[0].state_id)
            // console.log(stateFetchData.state[FetchMyData[0].state_id -10])
            setState(stateFetchData.state[FetchMyData[0]?.state_id -10]?.name)
            // setState(countyFetchData.countries[actualData.events[0].country_id - 1].name)
            // console.log(countyFetchData.countries[actualData.events[0].country_id - 1].name)



          //        // FETCH CITIES DATA
          // const cityData = await fetch(
          //   "https://boletaso.sehatpk.com/api/city",
          //   options
          //   );
          //   const cityFetchData = await cityData.json();
          //   setCity(cityFetchData.city[actualData.events[0].city_id - 1].name)
          //   console.log(cityFetchData.city[actualData.events[0].city_id - 1].name)
          //   console.log("ZAIN")
          };
    getData();
  }, []);

  // ref
  const sliderRefDetail = useRef(null);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <HeaderBox>
          <Header light="true" bold="true">
            Trending Events
          </Header>
        </HeaderBox>

        {/* Slider */}
        <SliderContainer>
          <Slider {...settings} ref={sliderRefDetail}>
            {FetchMyData.map((item, index) => (
              <SliderWrapper key={index}>
                <SliderBox>
                  <SliderImageBox>
                    <SliderImageNumberBox>{`#${
                      index + 1
                    }`}</SliderImageNumberBox>
                    <SliderImage
                      src="https://stadium.webaitool.com//storage/public/Satduim/Dv0BzgNdIU2z3ScRL3hewHzgoNTqkFRKYac6quS5.jpg"
                      alt={item.description}
                      height="auto"
                      width="auto"
                      loading="lazy"
                    />
                  </SliderImageBox>
                  <SliderTextBox>
                    <SliderTextSplitBox>
                      {/* ITEM name */}
                      <SliderTitle>{item.description}</SliderTitle>
                      {/* <SliderPrice>{item.price}</SliderPrice> */}
                      {/* ITEM time */}
                      <SliderDetails>{item.date_time}</SliderDetails>
                      {/* ITEM location */}
                      {/* <SliderDetails>{item.country_id + "lahore punjab, pakistan"}</SliderDetails> */}
                      <SliderDetails>
                        {
                          country +
                          ", " + 
                          state
                        }
                      </SliderDetails>
                      <SliderDetails>
                        { item.state_id}{"  "}
                        { item.city_id}{"  "}
                        {"Faisalabad Punjab, Pakistan "}
                      </SliderDetails>
                    </SliderTextSplitBox>

                    {/* ITEM PRICE */}
                    {/* <PriceBox>
                      <SliderPrice>{item.price}</SliderPrice>
                      <SliderPrice>{"From $15"}</SliderPrice>
                      <ChevronRightIcon
                        sx={{
                          color: "#fff",
                          fontSize: {
                            xs: "1.8rem",
                            sm: "1.2rem",
                            md: "1.8rem",
                          },
                        }}
                      />
                    </PriceBox> */}
                  </SliderTextBox>
                </SliderBox>
              </SliderWrapper>
            ))}
          </Slider>
        </SliderContainer>

        <SliderButtonContainer>
          <SliderButtonWrapper>
            <SliderButtonBox
              onClick={() => {
                sliderRefDetail?.current?.slickPrev();
              }}
            >
              <ArrowLeftRoundedIcon
                sx={{
                  color: "#fff",
                  fontSize: { xs: "2rem", sm: "1.5rem", md: "2.3rem" },
                }}
              />
            </SliderButtonBox>

            <SliderButtonDarkBox
              onClick={() => {
                sliderRefDetail?.current?.slickNext();
              }}
            >
              <ArrowRightRoundedIcon
                sx={{
                  color: "#fff",
                  fontSize: { xs: "2rem", sm: "1.5rem", md: "2.3rem" },
                  height: "100%",
                }}
              />
            </SliderButtonDarkBox>
          </SliderButtonWrapper>
        </SliderButtonContainer>
      </Wrapper>
    </Container>
  );
}
