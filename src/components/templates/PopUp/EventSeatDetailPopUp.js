import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { Dialog, DialogTitle, IconButton, Divider, Slide, Grid, Button, TextField, MenuItem } from "@mui/material";

// icon
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// component
import MapSvg from "@/components/json/MapSvg";
import EventBillingPopUp from "./EventPaymentPopUp";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />;
});

// styles
const Container = styled.div`
	height: 100vh;
	overflow: hidden;
`;

const Wrapper = styled.div``;

const MapContainer = styled.div``;

const MapWrapper = styled.div`
	height: 100vh;
	width: 100%;
`;

const Map = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const TextContainer = styled.div`
	height: 100vh;
	overflow: auto;
`;

const TextWrapper = styled.div`
	padding: 2rem;
`;

const ImageBox = styled.div`
	position: relative;
	z-index: 0;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const TopActionContainer = styled.div`
	position: absolute;
	z-index: 1;
	top: 4%;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
	padding: 0 1rem;
`;

const TopActionButtonBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media (max-width: 600px) {
		gap: 0.5rem;
	}
`;

const HeaderWrapper = styled.div``;

const DealBox = styled.div``;

const DealText = styled.p`
	color: ${(props) => (props.amazingdeal === "true" ? "#39C8D1" : "#22B80A")};
	font-size: 1.1rem;
	font-weight: 500;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

const HeaderTextBox = styled.div`
	margin-top: 1rem;
`;

const HeaderText = styled.p`
	color: #464646;
	font-size: 2rem;
	font-family: "WhyInkHeavy";
	line-height: 1.3;

	@media (max-width: 600px) {
		font-size: 2rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.3rem;
	}
`;

const DescriptionBox = styled.div`
	/* margin-top: 0.5rem; */
`;

const DescriptionText = styled.p`
	color: var(--purpleColor);
	font-size: 1rem;
	font-family: "Montserrat";
	font-weight: 700;
	opacity: 0.8;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 3rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	width: 80%;

	@media (max-width: 600px) {
		width: 100%;
		gap: 2rem;
		flex-direction: column;
	}
`;

const ButtonBox = styled.div`
	width: 100%;
`;

const ConditionContainer = styled.div`
	margin-top: 4rem;
`;

const ConditionWrapper = styled.div`
	margin: 1.5rem 0;
`;

const ConditionBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ConditionImageBox = styled.div``;

const ConditionImage = styled.img`
	width: 1.5rem;
	object-fit: contain;
`;

const ConditionTextBox = styled.div``;

const ConditionTextHeader = styled.p`
	color: #464646;
	font-size: 1.05rem;
	font-family: "WhyInkHeavy";
	line-height: 1.5;

	@media (max-width: 600px) {
		font-size: 1.1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.3rem;
	}
`;

const ConditionTextDescription = styled.p`
	color: #000;
	font-size: 0.85rem;
	font-family: "Montserrat";
	font-weight: 500;
	opacity: 0.8;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

// Map Styling
//
//
const MapSVGContainer = styled.div``;

export default function EventSeatDetailPopUp({ openPopUp, setOpenPopUp, seatDetail }) {
	const [seatSectionText, setSeatSectionText] = useState("");
	const [numberOfTicket, setNumberOfTicket] = useState(1);
	const [openBillingPopUp, setOpenBillingPopUp] = useState(false);

	const handleClickOpen = () => {
		setOpenPopUp(true);
	};

	const handleClose = () => {
		setOpenPopUp(false);
	};

	console.log(seatDetail);

	const selectedTickerNumber = [
		{
			value: 1,
			label: "1 Ticket",
		},
		{
			value: 2,
			label: "2 Tickets",
		},
		{
			value: 3,
			label: "3 Tickets",
		},
		{
			value: 4,
			label: "4 Tickets",
		},
	];

	const ticketConditionsData = [
		{
			title: "Electronic tickets",
			description: "These are e-tickets and will be delivered to your email address.",
			icon: "/images/icons/ticketBlack.png",
		},
		{
			title: "In hand date",
			description: "Ticket delivered by February 17, 2024",
			icon: "/images/icons/timeBlack.png",
		},
		{
			title: "Returnable until Feb 15, 2024",
			description: "Ticket returns without the nonsense.",
			icon: "/images/icons/dateBlack.png",
		},
		{
			title: "Buyer Guarantee protected",
			description: "Every ticket is protected. If your event gets cancelled, we will make it right.",
			icon: "/images/icons/medalBlack.png",
		},
	];

	return (
		<>
			<Dialog fullScreen open={openPopUp} onClose={handleClose} TransitionComponent={Transition}>
				<DialogTitle sx={{ m: 0, p: 2 }}>
					<IconButton
						aria-label='close'
						size='large'
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 8,
							top: 8,
							color: " #2a2a2a",
						}}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>

				<Container>
					<Wrapper>
						<Grid container>
							{/* Seat Details */}
							<Grid item xs={12} sm={5} md={5}>
								<TextContainer>
									{/* Image */}
									<ImageBox>
										{/* Acton Button Besides header */}
										<TopActionContainer>
											<IconButton
												onClick={handleClose}
												size='large'
												sx={{
													backgroundColor: "#fff",
													"&:hover": { backgroundColor: "#e0e0e0" },
												}}
											>
												<ArrowBackIcon sx={{ color: "#464646", fontSize: "1.7rem" }} />
											</IconButton>

											<TopActionButtonBox>
												<IconButton
													size='large'
													sx={{
														backgroundColor: "#fff",
														"&:hover": { backgroundColor: "#e0e0e0" },
													}}
												>
													<ErrorOutlineIcon
														sx={{ color: "var(--purpleColor)", fontSize: "1.7rem" }}
													/>
												</IconButton>

												<IconButton
													size='large'
													sx={{
														backgroundColor: "#fff",
														"&:hover": { backgroundColor: "#e0e0e0" },
													}}
												>
													<FavoriteBorderIcon sx={{ color: "red", fontSize: "1.7rem" }} />
												</IconButton>
											</TopActionButtonBox>
										</TopActionContainer>

										<Image
											src='/images/dialogPopUp/musicDialog.png'
											alt='Dialog Ticket Seating Detail'
											loading='lazy'
											height='auto'
											width='auto'
										/>
									</ImageBox>
									<TextWrapper>
										<HeaderWrapper>
											{/* Deal type */}
											<DealBox>
												<DealText amazingdeal={String(seatDetail.amazing)}>{`${
													seatDetail.amazing ? "Amazing Deal" : "Great Deal"
												}`}</DealText>
											</DealBox>
											{/* Row Number  */}
											<HeaderTextBox>
												<HeaderText>{seatDetail.name}</HeaderText>
											</HeaderTextBox>
											{/* Price */}
											<DescriptionBox>
												<DescriptionText>{`$${seatDetail.price} each`}</DescriptionText>
											</DescriptionBox>
										</HeaderWrapper>

										{/* Buttons actions for numbers of ticket and billing pop up */}
										<ButtonContainer>
											<ButtonWrapper>
												<ButtonBox>
													<TextField
														select
														size='small'
														fullWidth={true}
														defaultValue={1}
														label='Ticket'
														sx={{
															// border: "1px solid #464646",

															fieldset: { border: "2px solid #464646" },
														}}
													>
														{selectedTickerNumber.map((option) => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</TextField>
												</ButtonBox>
												<ButtonBox>
													<Button
														size='large'
														variant='outlined'
														sx={{
															textTransform: "none",
															backgroundColor: "var(--purpleColor)",
															color: "#fff",
															fontFamily: "Montserrat",
															fontWeight: "700",
															width: "100%",
															padding: ".55rem 0",

															"&:hover": { color: "var(--purpleColor)" },
														}}
														onClick={() => setOpenBillingPopUp(true)}
													>
														Continue to Billing
													</Button>
												</ButtonBox>
											</ButtonWrapper>
										</ButtonContainer>

										{/* Condition for the tickets */}
										<ConditionContainer>
											{ticketConditionsData.map((item, index) => (
												<ConditionWrapper key={index}>
													<ConditionBox>
														<ConditionImageBox>
															<ConditionImage
																src={item.icon}
																alt={item.title}
																loading='lazy'
																height='auto'
																width='auto'
															/>
														</ConditionImageBox>
														<ConditionTextBox>
															<ConditionTextHeader>{item.title}</ConditionTextHeader>
															<ConditionTextDescription>
																{item.description}
															</ConditionTextDescription>
														</ConditionTextBox>
													</ConditionBox>
												</ConditionWrapper>
											))}
										</ConditionContainer>
									</TextWrapper>
								</TextContainer>
							</Grid>
							{/* Map */}
							<Grid item xs={12} sm={7} md={7}>
								<MapContainer>
									<MapSVGContainer>
										<MapSvg setSeatSectionText={setSeatSectionText} />
									</MapSVGContainer>
								</MapContainer>
							</Grid>
						</Grid>
					</Wrapper>
				</Container>
			</Dialog>
			{/* Event Payment pop Up */}

			<EventBillingPopUp
				openBillingPopUp={openBillingPopUp}
				setOpenBillingPopUp={setOpenBillingPopUp}
				seatDetail={seatDetail}
			/>
		</>
	);
}
