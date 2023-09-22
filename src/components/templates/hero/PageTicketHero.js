import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";

// icons
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled.section`
	position: relative;
	z-index: 0;
	overflow: hidden;
`;

const Wrapper = styled.div`
	height: 100vh;
	display: grid;
	align-items: center;

	@media (min-width: 601px) and (max-width: 1024px) {
		height: auto;
	}
`;

const BgImage = styled.img`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
	object-fit: cover;
	top: 0;
	left: 0;
`;

const TopActionContainer = styled.div`
	width: 55%;
	margin-top: 4rem;

	@media (max-width: 600px) {
		width: 95%;
		margin-top: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 65%;
	}
`;

const TopActionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TopActionDateBox = styled.div`
	background-color: #110d9a;
	padding: 1rem 3rem;
	border-radius: 0 0 4rem 0;
	text-align: center;

	@media (max-width: 600px) {
		padding: 0.5rem 2rem;
		border-radius: 0 0 3rem 0;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		border-radius: 0 0 3rem 0;
		padding: 1rem 2.5rem;
	}
`;

const TopActionDateText = styled.p`
	color: #fff;
	font-size: 2rem;
	font-weight: 700;
	line-height: 1.05;

	@media (max-width: 600px) {
		font-size: 1.5rem;
		line-height: 1.4;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1rem;
	}
`;

const TopActionButtonBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	@media (max-width: 600px) {
		gap: 0.5rem;
	}
`;

const TextContainer = styled.div`
	width: 92%;
	margin: auto;
`;

const TextWrapper = styled.div`
	color: #fff;
	width: 55%;
	height: 100%;
	display: grid;
	align-items: center;

	@media (max-width: 600px) {
		text-align: center;
		width: 100%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 0;
	}
`;

const HeaderBox = styled.div``;

const Header = styled.h1`
	font-size: 2.3rem;
	font-family: "WhyInkHeavy";

	@media (max-width: 600px) {
		font-size: 2rem;
		line-height: 1.4;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.5rem;
	}
`;

const HeaderLine = styled.hr`
	background-color: #fff;
	width: 25%;
	height: 5px;
	margin-top: 0.5rem;

	@media (max-width: 600px) {
		text-align: center;
		margin: auto;
		margin-top: 1rem;
	}
`;

const DescriptionBox = styled.div`
	margin-top: 3rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

const DescriptionLabel = styled.p`
	font-size: 1.5rem;
	font-family: "WhyInkReg";
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1.1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

const Description = styled.p`
	font-size: 1.25rem;
	font-family: "Montserrat";
	margin-top: 1rem;
	line-height: 1.5;

	@media (max-width: 600px) {
		font-size: 0.95rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

const ButtonBox = styled.div`
	margin-top: 4rem;

	@media (max-width: 600px) {
		margin-top: 3rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 3rem;
	}
`;

const Button = styled.button`
	background-color: #fff;
	color: var(--purpleColor);
	font-size: 1.1rem;
	font-weight: 700;
	padding: 1rem 3rem;
	border-radius: 0.5rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: var(--buttonHover);
		color: #fff;
	}
	@media (max-width: 600px) {
		width: 80%;
		margin: auto;
		padding: 1rem 0;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
		padding: 0.8rem 2.5rem;
	}
`;

const ActionButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-top: 3rem;

	@media (max-width: 600px) {
		justify-content: center;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 1rem;
	}
`;

const ActionButtonBox = styled.div``;

const ActionButton = styled.button`
	background-color: transparent;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;

	&:hover {
		transition: all 0.2s ease-in-out;
		outline: 1px solid #fff;
	}
`;

const ActionButtonIcon = styled.img`
	display: block;
	width: 2rem;
	object-fit: contain;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 1.5rem;
	}
`;

const ActionButtonText = styled.p`
	color: #fff;
	font-size: 1rem;
	font-weight: 400;
	border-radius: 0.5rem;
	transition: all 0.2s ease-in-out;

	@media (max-width: 600px) {
		width: 80%;
		margin: auto;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

export default function PageTicketHero({ header, description, image, link, buttonText }) {
	return (
		<Container>
			<BgImage src={image} alt={header} height='auto' width='auto' loading='lazy' />
			<Wrapper>
				{/* Top Action Button and Date */}
				<TopActionContainer>
					<TopActionWrapper>
						<TopActionDateBox>
							<TopActionDateText>
								APR
								<br />
								20
							</TopActionDateText>
						</TopActionDateBox>

						<TopActionButtonBox>
							<IconButton
								size='large'
								sx={{ backgroundColor: "#fff", "&:hover": { backgroundColor: "#e0e0e0" } }}
							>
								<ErrorOutlineIcon sx={{ color: "var(--purpleColor)", fontSize: "1.8rem" }} />
							</IconButton>

							<IconButton
								size='large'
								sx={{ backgroundColor: "#fff", "&:hover": { backgroundColor: "#e0e0e0" } }}
							>
								<FavoriteBorderIcon sx={{ color: "red", fontSize: "1.8rem" }} />
							</IconButton>
						</TopActionButtonBox>
					</TopActionWrapper>
				</TopActionContainer>

				<TextContainer>
					<TextWrapper>
						{/* Header */}
						<HeaderBox>
							<Header>{header}</Header>
							<HeaderLine />
						</HeaderBox>

						{/* Description */}
						<DescriptionBox>
							<DescriptionLabel>About:</DescriptionLabel>
							<Description>{description}</Description>
						</DescriptionBox>

						{/* Button CTA */}
						<ButtonBox>
							<Button>BUY TICKETS</Button>
						</ButtonBox>

						{/* Action Button */}
						<ActionButtonWrapper>
							<ActionButtonBox>
								<ActionButton>
									<ActionButtonIcon
										src='/images/icons/shareIcon.png'
										alt='Share Now'
										height='auto'
										width='auto'
										loading='lazy'
									/>
									<ActionButtonText>Share</ActionButtonText>
								</ActionButton>
							</ActionButtonBox>

							<ActionButtonBox>
								<ActionButton>
									<ActionButtonIcon
										src='/images/icons/seatingChartIcon.png'
										alt='Seating Chart'
										height='auto'
										width='auto'
										loading='lazy'
									/>
									<ActionButtonText>Seating Chart</ActionButtonText>
								</ActionButton>
							</ActionButtonBox>
						</ActionButtonWrapper>
					</TextWrapper>
				</TextContainer>
			</Wrapper>
		</Container>
	);
}
