import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import {
	Dialog,
	DialogTitle,
	IconButton,
	Divider,
	Slide,
	Grid,
	Button,
	TextField,
	MenuItem,
	Paper,
	InputBase,
} from "@mui/material";

// icon
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// component
import SuccessPopUp from "./SuccessPopUp";
import MediumHeader from "../textTemplate/MediumHeader";
import DescriptionMont from "../textTemplate/DescriptionMontDark";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='left' ref={ref} {...props} />;
});

// styles
const Container = styled.div`
	height: 100vh;
	overflow: hidden;

	@media (max-width: 600px) {
		height: auto;
	}
`;

const Wrapper = styled.div``;

const FormContainer = styled.div`
	padding: 2rem;

	@media (max-width: 600px) {
		padding: 2rem 1rem;
	}
`;

const FormWrapper = styled.div`
	padding-bottom: 5rem;
`;

const TopActionContainer = styled.div`
	width: 100%;
`;

const FormHeaderTextBox = styled.div`
	margin-top: 1rem;
`;

const FormHeaderText = styled.p`
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

const FormDescriptionBox = styled.div`
	/* margin-top: 0.5rem; */
`;

const FormDescriptionText = styled.p`
	color: var(--purpleColor);
	font-size: 1rem;
	font-family: "Montserrat";
	font-weight: 600;
	opacity: 0.8;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1rem;
		margin-top: 0.5rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

const FormSection = styled.div`
	padding: 1.5rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1rem 0;
	}
`;

const FormSectionHeader = styled.p`
	color: #464646;
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 1.3;
	margin-bottom: 1rem;

	@media (max-width: 600px) {
		font-size: 2rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}
`;

const FormAccountButton = styled.div`
	text-align: right;

	@media (max-width: 600px) {
		text-align: center;
		margin: 3rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 1rem;
	}
`;

const Box = styled.div`
	padding: 0.5rem 0;

	@media (max-width: 600px) {
		padding: 0.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.5rem 0;
	}
`;

const SlipWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	@media (max-width: 600px) {
		display: block;
		width: 100%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 1rem;
	}
`;

const BoxSplit = styled.div`
	width: 100%;
	padding: 0.5rem 0;

	@media (max-width: 600px) {
		padding: 0.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.5rem 0;
	}
`;

const Label = styled.p`
	font-family: "Montserrat";
	font-size: 0.9rem;
	font-weight: 500;
	margin-bottom: 0.5rem;
	text-align: left;

	@media (max-width: 600px) {
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const BankIconBox = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
`;

const BankIcon = styled.img`
	display: block;
	width: 1.8rem;
	padding: 0;

	@media (max-width: 600px) {
		width: 1rem;
		padding: 0.8rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 1rem;
	}
`;

const FormSubmitButtonBox = styled.div`
	margin-top: 2rem;

	@media (max-width: 600px) {
		text-align: center;
	}
`;

// Right Hand Ticket Detail styling
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

const HeaderWrapper = styled.div`
	margin-top: 2rem;
`;

const HeaderTextBox = styled.div``;

const DescriptionBox = styled.div`
	margin-top: 0.5rem;
`;

const ActionBoxContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
`;

const ActionBox = styled.div``;

const PriceText = styled.p`
	color: var(--purpleColor);
	font-size: 1.2rem;
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

const EmailBox = styled.div`
	display: flex;
	gap: 0.4rem;
	align-items: center;
	margin-top: 2rem;
`;

const EmailText = styled.p`
	color: var(--purpleColor);
	font-size: 1rem;
	font-family: "Montserrat";
	font-weight: 600;
	opacity: 0.8;
	line-height: 1.6;

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

export default function EventSeatDetailPopUp({ openBillingPopUp, setOpenBillingPopUp, seatDetail }) {
	const [numberOfTicket, setNumberOfTicket] = useState("1");
	const [openSuccess, setOpenSuccess] = useState(false);

	const handleClose = () => {
		setOpenBillingPopUp(false);
	};

	console.log(seatDetail);

	const selectedTickerNumber = [
		{
			value: "1",
			label: "1 Ticket",
		},
		{
			value: "2",
			label: "2 Tickets",
		},
		{
			value: "3",
			label: "3 Tickets",
		},
		{
			value: "4",
			label: "4 Tickets",
		},
	];

	const yearData = [
		{
			value: "2024",
			label: "2024",
		},
		{
			value: "2025",
			label: "2025",
		},
		{
			value: "2026",
			label: "2026",
		},
		{
			value: "2027",
			label: "2027",
		},
	];

	const monthData = [
		{
			value: "Month 1",
			label: "Month 1",
		},
		{
			value: "Month 2",
			label: "Month 2",
		},
		{
			value: "Month 3",
			label: "Month 3",
		},
		{
			value: "Month 4",
			label: "Month 4",
		},
		{
			value: "Month 5",
			label: "Month 5",
		},
	];

	const bankIconData = [
		{
			icon: "/images/icons/bank1.png",
			title: "Bank 1",
		},
		{
			icon: "/images/icons/bank2.png",
			title: "Bank 2",
		},
		{
			icon: "/images/icons/bank3.png",
			title: "Bank 3",
		},
		{
			icon: "/images/icons/bank4.png",
			title: "Bank 4",
		},
	];

	return (
		<>
			<Dialog fullScreen open={openBillingPopUp} onClose={handleClose} TransitionComponent={Transition}>
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
						<Grid container justifyContent='space-evenly'>
							<Grid
								item
								xs={12}
								sm={7}
								md={7}
								sx={{ borderRight: "1px solid #e0e0e0", height: "100vh", overflow: "auto" }}
							>
								<FormContainer>
									{/* Back Button */}
									<TopActionContainer>
										<IconButton
											onClick={handleClose}
											size='large'
											sx={{ backgroundColor: "#fff", "&:hover": { backgroundColor: "#e0e0e0" } }}
										>
											<ArrowBackIcon sx={{ color: "#464646", fontSize: "1.7rem" }} />
										</IconButton>
									</TopActionContainer>

									<FormHeaderTextBox>
										<FormHeaderText>Billing Information</FormHeaderText>

										<FormDescriptionBox>
											<FormDescriptionText>
												BOLETASO checkout is always secure and encrypted.
											</FormDescriptionText>
										</FormDescriptionBox>

										<FormAccountButton>
											<Button
												size='large'
												variant='outlined'
												sx={{
													textTransform: "none",
													backgroundColor: "var(--purpleColor)",
													color: "#fff",
													fontFamily: "Montserrat",
													fontWeight: "700",
													padding: ".55rem 1rem",

													"&:hover": { color: "var(--purpleColor)" },
												}}
												onClick={() => setOpenBillingPopUp(true)}
											>
												Create an account
											</Button>
										</FormAccountButton>
									</FormHeaderTextBox>

									{/* Form */}
									<FormWrapper>
										<FormSection>
											<FormSectionHeader>Pay with Card</FormSectionHeader>

											<Box>
												<Label>Credit card number</Label>
												<Paper
													component='form'
													sx={{
														p: "6px",
														display: "flex",
														alignItems: "center",
														// width: { xs: 350, sm: 300, md: 400 },
														width: "100%",
														border: "1px solid var(--lightBorder)",
														boxShadow: "none",
													}}
												>
													<InputBase
														sx={{
															ml: 1,
															flex: 1,
															fontFamily: "Montserrat",
														}}
														size='small'
														placeholder=''
														inputProps={{ "aria-label": "search google maps" }}
													/>
													<BankIconBox>
														{bankIconData.map((item, index) => (
															<BankIcon
																key={index}
																src={item.icon}
																alt={item.title}
																loading='lazy'
																height='auto'
																width='auto'
															/>
														))}
													</BankIconBox>
												</Paper>
											</Box>

											<SlipWrapper>
												<BoxSplit>
													<Label>Exp. month</Label>
													<TextField
														select
														label=''
														fullWidth={true}
														sx={{ width: "100%" }}
														size='small'
													>
														{monthData.map((option) => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</TextField>
												</BoxSplit>

												<BoxSplit>
													<Label>Exp. year</Label>
													<TextField
														select
														label=''
														fullWidth={true}
														sx={{ width: "100%" }}
														size='small'
													>
														{yearData.map((option) => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</TextField>
												</BoxSplit>

												<BoxSplit>
													<Label>CVV</Label>
													<TextField type='text' fullWidth={true} size='small' />
												</BoxSplit>
											</SlipWrapper>
										</FormSection>

										<FormSection>
											<FormSectionHeader>Billing Address</FormSectionHeader>

											<SlipWrapper>
												<BoxSplit>
													<Label>First Name</Label>
													<TextField type='text' fullWidth={true} size='small' />
												</BoxSplit>

												<BoxSplit>
													<Label>Last Name</Label>
													<TextField type='text' fullWidth={true} size='small' />
												</BoxSplit>
											</SlipWrapper>

											<Box>
												<Label>Address</Label>
												<TextField type='text' fullWidth={true} size='small' />
											</Box>

											<SlipWrapper>
												<BoxSplit>
													<Label>City</Label>
													<TextField type='text' fullWidth={true} size='small' />
												</BoxSplit>

												<BoxSplit>
													<Label>State</Label>
													<TextField type='text' fullWidth={true} size='small' />
												</BoxSplit>

												<BoxSplit>
													<Label>Zip Code</Label>
													<TextField type='text' fullWidth={true} size='small' />
												</BoxSplit>
											</SlipWrapper>
										</FormSection>

										<FormSubmitButtonBox>
											<Button
												size='large'
												variant='outlined'
												sx={{
													textTransform: "none",
													backgroundColor: "var(--purpleColor)",
													color: "#fff",
													fontFamily: "Montserrat",
													fontWeight: "700",
													padding: ".55rem 1rem",

													"&:hover": { color: "var(--purpleColor)" },
												}}
												onClick={() => {
													setOpenSuccess(true);
													console.log("cli");
												}}
											>
												Continue to Review
											</Button>
										</FormSubmitButtonBox>
									</FormWrapper>
								</FormContainer>
							</Grid>

							{/* Ticket Details (Right Grid) */}
							<Grid item xs={12} sm={4.5} md={4.5}>
								<TextContainer>
									<TextWrapper>
										{/* Image */}
										<ImageBox>
											<Image
												src='/images/dialogPopUp/musicDialog.png'
												alt='Dialog Ticket Seating Detail'
												loading='lazy'
												height='auto'
												width='auto'
											/>
										</ImageBox>

										{/* Event Name and Details */}
										<HeaderWrapper>
											{/* Row Number  */}
											<HeaderTextBox>
												<MediumHeader>{seatDetail.name}</MediumHeader>
											</HeaderTextBox>
											{/* Price */}
											<DescriptionBox>
												<DescriptionMont>{seatDetail.location}</DescriptionMont>
											</DescriptionBox>
										</HeaderWrapper>

										<ActionBoxContainer>
											<ActionBox>
												<TextField
													select
													size='small'
													// fullWidth={true}
													defaultValue={"1"}
													label='Ticket'
													sx={{
														// border: "1px solid #464646",

														fieldset: { border: "2px solid #464646" },
													}}
													onChange={(event) => {
														setNumberOfTicket(event.target.value);
													}}
												>
													{selectedTickerNumber.map((option) => (
														<MenuItem key={option.value} value={option.value}>
															{option.label}
														</MenuItem>
													))}
												</TextField>
											</ActionBox>
											<ActionBox>
												<PriceText>
													{`$${seatDetail.price}  x `}
													<span
														style={{ color: "#464646", opacity: ".8" }}
													>{`${numberOfTicket}`}</span>
												</PriceText>
											</ActionBox>
										</ActionBoxContainer>

										<EmailBox>
											<DraftsOutlinedIcon
												sx={{ fontSize: "1.5rem", color: "var(--purpleColor)" }}
											/>
											<EmailText>johnadam123@gamil.com</EmailText>
										</EmailBox>
									</TextWrapper>
								</TextContainer>
							</Grid>
						</Grid>
					</Wrapper>
				</Container>
				<SuccessPopUp open={openSuccess} setOpen={setOpenSuccess} />
			</Dialog>
		</>
	);
}
