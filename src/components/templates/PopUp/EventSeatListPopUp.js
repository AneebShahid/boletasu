import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { Dialog, DialogTitle, IconButton, Divider, Slide, Grid, Button, TextField, MenuItem } from "@mui/material";

// icon
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// component
import EventSeatDetailPopUp from "./EventSeatDetailPopUp";
import EventPaymentPopUp from "./EventPaymentPopUp";
import MediumHeader from "../textTemplate/MediumHeader";
import DescriptionMont from "../textTemplate/DescriptionMontDark";
import MapSvg from "@/components/json/MapSvg";
import LoginPopUp from "./LoginPopUp";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

// styles
const Container = styled.div`
	height: 100vh;
	overflow: hidden;

	@media (max-width: 600px) {
		height: auto;
		overflow: auto;
	}
`;

const Wrapper = styled.div``;

// Map Styling
const MapSVGContainer = styled.div``;

// Seat list Styling
const TextContainer = styled.div`
	position: relative;
	z-index: 0;
	height: 100vh;
	overflow: auto;
	padding: 2rem;
`;

const TextWrapper = styled.div``;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
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

const HeaderTextBox = styled.div``;

const DescriptionBox = styled.div`
	margin-top: 0.5rem;
`;

const ButtonActionContainer = styled.div`
	padding: 1.5rem 0;
`;

const ButtonActionWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	@media (max-width: 600px) {
		gap: 1rem;
		flex-direction: column;
	}
`;

const ButtonActionBox = styled.div`
	width: 100%;
`;

const ButtonAction = styled.div``;

const ListingMainContainer = styled.div`
	margin: 1rem 0 3rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

const ListingActionContainer = styled.div`
	margin-bottom: 2rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 2rem;
	}
`;

const ListingActionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ListingNumberBox = styled.div``;

const ListingNumberText = styled.p`
	color: #464646;
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 1rem;
`;

const ListingActionButtonBox = styled.div``;

const ListingActionButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.2rem;
	background-color: transparent;
	color: #2a2a2a;
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 0.85rem;
	padding: 0.5rem;
`;

const ListingContainer = styled.div``;

const ListWrapper = styled.div`
	position: relative;
	z-index: 0;
	overflow: hidden;
	background-color: #e6e5ff;
	border-radius: 0.5rem;
	margin: 1rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin: 1rem 0;
	}
`;

const ListBanner = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	width: 18%;
	background-color: ${(props) => (props.amazingdeal === "true" ? "#39C8D1" : "#22B80A")};
	color: #fff;
	font-size: 0.55rem;
	font-weight: 500;
	padding: 0.2rem 0;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 0.7rem;
		width: 30%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 30%;
		font-size: 0.4rem;
		padding: 0.1rem 0;
	}
`;

const ListBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;

	@media (max-width: 600px) {
		flex-direction: column;
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 1rem;
		padding: 0.6rem;
	}
`;

const ListDateBox = styled.div`
	color: var(--purpleColor);
	border: 2px solid var(--purpleColor);
	border-radius: 0.5rem;
	padding: 1rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.4rem;
	}
`;

const ListDateText = styled.p`
	font-size: 1.8rem;
	font-weight: 700;
	line-height: 1;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 1.6rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const ListDateTextLabel = styled.p`
	font-size: 0.75rem;
	font-weight: 600;
	line-height: 1;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.4rem;
	}
`;

const ListTextBox = styled.div`
	flex: 1;
`;

const ListTextHeader = styled.p`
	font-size: 1.25rem;
	font-weight: 700;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 40ch;

	@media (max-width: 600px) {
		font-size: 1.1rem;
		max-width: 25ch;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.75rem;
		max-width: 35ch;
	}
`;

const ListTextLocation = styled.p`
	color: #464646;
	font-size: 1.05rem;
	font-weight: 400;
	opacity: 0.9;

	@media (max-width: 600px) {
		font-size: 0.9rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.5rem;
	}
`;

const ListButtonBox = styled.div``;

const ListButton = styled.button`
	background-color: #02004d;
	color: #fff;
	font-size: 0.9rem;
	font-weight: 600;
	padding: 0.7rem 2.5rem;

	&:hover {
		background-color: var(--purpleColor);
		color: #fff;
		transition: all 0.2s ease-in-out;
	}
	@media (max-width: 600px) {
		font-size: 1rem;
		padding: 1rem 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.5rem;
		padding: 0.4rem 1rem;
	}
`;

// Specific seat styling

const SeatPopUpContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: #fff;
	z-index: 100;
	height: 100%;
	width: 100%;
	overflow: auto;
`;

const SeatPopUpTextWrapper = styled.div`
	padding: 2rem;
`;

const SeatPopUpImageBox = styled.div`
	position: relative;
	z-index: 0;
`;

const SeatPopUpImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const SeatPopUpTopActionContainer = styled.div`
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

const SeatPopUpTopActionButtonBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media (max-width: 600px) {
		gap: 0.5rem;
	}
`;

const SeatPopUpHeaderWrapper = styled.div``;

const SeatPopUpDealBox = styled.div``;

const SeatPopUpDealText = styled.p`
	color: ${(props) => (props.amazingdeal === "true" ? "#39C8D1" : "#22B80A")};
	font-size: 1.1rem;
	font-weight: 500;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

const SeatPopUpHeaderTextBox = styled.div`
	margin-top: 1rem;
`;

const SeatPopUpHeaderText = styled.p`
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

const SeatPopUpDescriptionBox = styled.div`
	/* margin-top: 0.5rem; */
`;

const SeatPopUpDescriptionText = styled.p`
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

const SeatPopUpButtonContainer = styled.div`
	margin-top: 3rem;
`;

const SeatPopUpButtonWrapper = styled.div`
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

const SeatPopUpButtonBox = styled.div`
	width: 100%;
`;

const SeatPopUpConditionContainer = styled.div`
	margin-top: 4rem;
`;

const SeatPopUpConditionWrapper = styled.div`
	margin: 1.5rem 0;
`;

const SeatPopUpConditionBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const SeatPopUpConditionImageBox = styled.div``;

const SeatPopUpConditionImage = styled.img`
	width: 1.5rem;
	object-fit: contain;
`;

const SeatPopUpConditionTextBox = styled.div``;

const SeatPopUpConditionTextHeader = styled.p`
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

const SeatPopUpConditionTextDescription = styled.p`
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

export default function EventDetailPopUp({ openPopUp, setOpenPopUp, eventName, eventDescription, eventListingData }) {
	const [openSeatDetailPop, setOpenSeatDetailPop] = useState(false);
	const [seatDetailsToForward, setSeatDetailsToForward] = useState([]);
	const [eventNamePayment, setEventNamePayment] = useState("");
	const [eventLocationPayment, setEventLocationPayment] = useState("");
	const [seatSectionText, setSeatSectionText] = useState("");
	const [showSeatOverlay, setShowSeatOverlay] = useState(false);

	const [openBillingPopUp, setOpenBillingPopUp] = useState(false);

	// filter Data to display on the list
	console.log(eventListingData);
	const filterDataToShow = eventListingData?.filter((element) => element.seatSection.includes(seatSectionText));
	// const filterDataToShow = eventListingData.filter((element) => element.seatSection.includes(seatSection));

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

	const handleClickOpen = () => {
		setOpenPopUp(true);
	};

	const handleClose = () => {
		setOpenPopUp(false);
	};

	const seatQuantity = [
		{
			value: "1",
			label: "1 Seat",
		},
		{
			value: "1",
			label: "2 Seat",
		},
		{
			value: "1",
			label: "3 Seat",
		},
		{
			value: "1",
			label: "4 Seat",
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
						<Grid container direction='row-reverse'>
							{/* Map */}
							<Grid item xs={12} sm={6} md={7}>
								<MapSVGContainer>
									<MapSvg setSeatSectionText={setSeatSectionText} />
								</MapSVGContainer>
							</Grid>

							{/* Seat List  */}
							<Grid item xs={12} sm={6} md={5}>
								<TextContainer>
									{/* Show Initial List, once user select any seat, hide and show the seat pop up details */}
									{!showSeatOverlay && (
										<TextWrapper>
											{/* Event name */}
											<HeaderContainer>
												<HeaderWrapper>
													<HeaderTextBox>
														<MediumHeader>{eventName}</MediumHeader>
													</HeaderTextBox>
													<DescriptionBox>
														<DescriptionMont>{eventDescription}</DescriptionMont>
													</DescriptionBox>
												</HeaderWrapper>

												{/* Acton Button Besides header */}
												<TopActionButtonBox>
													<IconButton size='small'>
														<ErrorOutlineIcon
															sx={{ color: "var(--purpleColor)", fontSize: "1.6rem" }}
														/>
													</IconButton>

													<IconButton size='small'>
														<FavoriteBorderIcon sx={{ color: "red", fontSize: "1.6rem" }} />
													</IconButton>
												</TopActionButtonBox>
											</HeaderContainer>

											{/* Sorting Buttons */}
											<ButtonActionContainer>
												<ButtonActionWrapper>
													<ButtonActionBox>
														<TextField
															select
															size='small'
															fullWidth={true}
															label='Quantity'
															sx={{
																// border: "1px solid #464646",
																textAlign: "center",
																fieldset: { border: "1px solid #464646" },
															}}
														>
															{seatQuantity.map((option) => (
																<MenuItem key={option.value} value={option.value}>
																	{option.label}
																</MenuItem>
															))}
														</TextField>
													</ButtonActionBox>

													<ButtonActionBox>
														<Button
															size='medium'
															variant='outlined'
															sx={{
																textTransform: "none",
																border: "1px solid #464646",
																color: "#464646",
																fontFamily: "Montserrat",
																width: "100%",

																"&:hover": { border: "1px solid #464646" },
															}}
														>
															Best Seats
														</Button>
													</ButtonActionBox>

													<ButtonActionBox>
														<Button
															size='medium'
															variant='outlined'
															sx={{
																textTransform: "none",
																border: "1px solid #464646",
																color: "#464646",
																fontFamily: "Montserrat",
																width: "100%",
																"&:hover": { border: "1px solid #464646" },
															}}
														>
															Low Price
														</Button>
													</ButtonActionBox>
												</ButtonActionWrapper>
											</ButtonActionContainer>

											{/* Divider */}
											<Divider />

											{/* Seat Mapping list */}
											<ListingMainContainer>
												{/* List Action Button */}
												<ListingActionContainer>
													<ListingActionWrapper>
														<ListingNumberBox>
															<ListingNumberText>
																{eventListingData !== null || undefined ? (
																	<>{String(filterDataToShow.length)} Listings</>
																) : (
																	<>loading Listings...</>
																)}
															</ListingNumberText>
														</ListingNumberBox>
														{/* <ListingActionButtonBox>
													<ListingActionButton>
														Sort by
														<UnfoldMoreRoundedIcon sx={{ fontSize: "1rem" }} />
													</ListingActionButton>
												</ListingActionButtonBox> */}
													</ListingActionWrapper>
												</ListingActionContainer>

												{/* List Map */}
												<ListingContainer>
													{filterDataToShow?.length === 0 ? (
														<div>No available seats, try Viewing All Seats.</div>
													) : (
														<>
															{filterDataToShow?.map((item, index) => (
																<ListWrapper key={index}>
																	<ListBanner amazingdeal={String(item.amazing)}>{`${item.amazing ? "Amazing deal" : "Great Deal"
																		}`}</ListBanner>
																	<ListBox>
																		{/* Date Value */}
																		<ListDateBox>
																			<ListDateText>
																				{item.totalTicket}
																			</ListDateText>
																			<ListDateTextLabel>
																				Tickets
																			</ListDateTextLabel>
																		</ListDateBox>
																		{/* Event Name and Location */}
																		<ListTextBox>
																			<ListTextHeader>{item.name}</ListTextHeader>
																			<ListTextLocation>
																				{item.location}
																			</ListTextLocation>
																		</ListTextBox>
																		{/* Button for the dialog box */}
																		<ListButtonBox>
																			<ListButton
																				onClick={() => {
																					// setOpenSeatDetailPop(true);
																					setSeatDetailsToForward(item);
																					setEventNamePayment(item.name);
																					setEventLocationPayment(
																						item.location
																					);
																					setShowSeatOverlay(true);
																				}}
																			>
																				$34 each
																			</ListButton>
																		</ListButtonBox>
																	</ListBox>
																</ListWrapper>
															))}
														</>
													)}
												</ListingContainer>

												{/* View All Button to remove filter string */}
												<ButtonActionBox>
													<Button
														onClick={() => setSeatSectionText("")}
														size='medium'
														variant='outlined'
														sx={{
															textTransform: "none",
															outline: "2px solid var(--purpleColor)",
															color: "var(--purpleColor)",
															fontFamily: "Montserrat",
															fontWeight: "600",
															width: "100%",
															mt: 2,

															"&:hover": {
																background: "var(--purpleColor)",
																color: "#fff",
															},
														}}
													>
														View All Seats
													</Button>
												</ButtonActionBox>
											</ListingMainContainer>
										</TextWrapper>
									)}

									<>
										{showSeatOverlay && (
											<SeatPopUpContainer>
												{/* Image */}
												<SeatPopUpImageBox>
													{/* Acton Button Besides header */}
													<SeatPopUpTopActionContainer>
														<IconButton
															onClick={() => setShowSeatOverlay(false)}
															size='large'
															sx={{
																backgroundColor: "#fff",
																"&:hover": { backgroundColor: "#e0e0e0" },
															}}
														>
															<ArrowBackIcon
																sx={{ color: "#464646", fontSize: "1.7rem" }}
															/>
														</IconButton>

														<SeatPopUpTopActionButtonBox>
															<IconButton
																size='large'
																sx={{
																	backgroundColor: "#fff",
																	"&:hover": { backgroundColor: "#e0e0e0" },
																}}
															>
																<ErrorOutlineIcon
																	sx={{
																		color: "var(--purpleColor)",
																		fontSize: "1.7rem",
																	}}
																/>
															</IconButton>

															<IconButton
																size='large'
																sx={{
																	backgroundColor: "#fff",
																	"&:hover": { backgroundColor: "#e0e0e0" },
																}}
															>
																<FavoriteBorderIcon
																	sx={{ color: "red", fontSize: "1.7rem" }}
																/>
															</IconButton>
														</SeatPopUpTopActionButtonBox>
													</SeatPopUpTopActionContainer>

													<SeatPopUpImage
														src='/images/dialogPopUp/musicDialog.png'
														alt='Dialog Ticket Seating Detail'
														loading='lazy'
														height='auto'
														width='auto'
													/>
												</SeatPopUpImageBox>
												<SeatPopUpTextWrapper>
													<SeatPopUpHeaderWrapper>
														{/* Deal type */}
														<SeatPopUpDealBox>
															<SeatPopUpDealText
																amazingdeal={String(seatDetailsToForward.amazing)}
															>{`${seatDetailsToForward.amazing
																	? "Amazing Deal"
																	: "Great Deal"
																}`}</SeatPopUpDealText>
														</SeatPopUpDealBox>
														{/* Row Number  */}
														<SeatPopUpHeaderTextBox>
															<SeatPopUpHeaderText>
																{seatDetailsToForward.name}
															</SeatPopUpHeaderText>
														</SeatPopUpHeaderTextBox>
														{/* Price */}
														<SeatPopUpDescriptionBox>
															<SeatPopUpDescriptionText>{`$${seatDetailsToForward.price} each`}</SeatPopUpDescriptionText>
														</SeatPopUpDescriptionBox>
													</SeatPopUpHeaderWrapper>

													{/* Buttons actions for numbers of ticket and billing pop up */}
													<SeatPopUpButtonContainer>
														<SeatPopUpButtonWrapper>
															<SeatPopUpButtonBox>
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
																		<MenuItem
																			key={option.value}
																			value={option.value}
																		>
																			{option.label}
																		</MenuItem>
																	))}
																</TextField>
															</SeatPopUpButtonBox>
															<SeatPopUpButtonBox>
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
															</SeatPopUpButtonBox>
														</SeatPopUpButtonWrapper>
													</SeatPopUpButtonContainer>

													{/* Condition for the tickets */}
													<SeatPopUpConditionContainer>
														{ticketConditionsData.map((item, index) => (
															<SeatPopUpConditionWrapper key={index}>
																<SeatPopUpConditionBox>
																	<SeatPopUpConditionImageBox>
																		<SeatPopUpConditionImage
																			src={item.icon}
																			alt={item.title}
																			loading='lazy'
																			height='auto'
																			width='auto'
																		/>
																	</SeatPopUpConditionImageBox>
																	<SeatPopUpConditionTextBox>
																		<SeatPopUpConditionTextHeader>
																			{item.title}
																		</SeatPopUpConditionTextHeader>
																		<SeatPopUpConditionTextDescription>
																			{item.description}
																		</SeatPopUpConditionTextDescription>
																	</SeatPopUpConditionTextBox>
																</SeatPopUpConditionBox>
															</SeatPopUpConditionWrapper>
														))}
													</SeatPopUpConditionContainer>
												</SeatPopUpTextWrapper>
											</SeatPopUpContainer>
										)}
									</>
								</TextContainer>
							</Grid>
						</Grid>
					</Wrapper>
				</Container>

				{/* Next Pop Up to show further details regarding the seats */}
				
				
				<EventSeatDetailPopUp
					openPopUp={openSeatDetailPop}
					setOpenPopUp={setOpenSeatDetailPop}
					seatDetail={seatDetailsToForward}
				/>

				{openBillingPopUp && (
				<LoginPopUp/>
				)}
			</Dialog>
		</>
	);
}

// {eventListingData
// 	.filter((elements) =>
// 		elements.seatSection.includes(seatSection)
// 	)
// 	.map((item, index) => (
// 		<ListWrapper key={index}>
// 			<ListBanner amazingdeal={String(item.amazing)}>{`${
// 				item.amazing ? "Amazing deal" : "Great Deal"
// 			}`}</ListBanner>
// 			<ListBox>

// 				<ListDateBox>
// 					<ListDateText>
// 						{item.totalTicket}
// 					</ListDateText>
// 					<ListDateTextLabel>
// 						Tickets
// 					</ListDateTextLabel>
// 				</ListDateBox>

// 				<ListTextBox>
// 					<ListTextHeader>{item.name}</ListTextHeader>
// 					<ListTextLocation>
// 						{item.location}
// 					</ListTextLocation>
// 				</ListTextBox>

// 				<ListButtonBox>
// 					<ListButton
// 						onClick={() => {
// 							setOpenSeatDetailPop(true);
// 							setSeatDetailsToForward(item);
// 							setEventNamePayment(item.name);
// 							setEventLocationPayment(
// 								item.location
// 							);
// 						}}
// 					>
// 						$34 each
// 					</ListButton>
// 				</ListButtonBox>
// 			</ListBox>
// 		</ListWrapper>
// 	))}
