import React, { useEffect, useContext } from "react";
import StateContext from "@/context/StateContext";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { TextField, MenuItem, Paper, InputBase, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

// component
import HeaderWithSearch from "@/components/user/HeaderWithSearchComponent";
import MediumHeader from "@/components/templates/textTemplate/MediumHeader";
import DescriptionMont from "@/components/templates/textTemplate/DescriptionMont";
import FullSolidButton from "@/components/templates/button/FullSolidButton";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

// styles
const Container = styled.section``;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;
	padding: 6rem 0;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 4rem 0 6rem 0;
	}
`;

const TextBox = styled.div`
	text-align: center;
	width: 50%;
	margin: auto;

	@media (max-width: 600px) {
		width: 100%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 70%;
	}
`;

const DescriptionBox = styled.div`
	margin-top: 2rem;
`;

const FormWrapper = styled.div`
	margin-top: 3rem;
`;

const Box = styled.div`
	padding: 1.5rem 1rem;

	@media (max-width: 600px) {
		padding: 0.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.5rem;
	}
`;

const BoxSplit = styled.div`
	width: 100%;
	padding: 1.5rem 1rem;

	@media (max-width: 600px) {
		padding: 0.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.5rem;
	}
`;

const SlipWrapper = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 600px) {
		display: block;
		width: 100%;
	}
`;

const Label = styled.p`
	font-size: 0.9rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	text-align: left;

	@media (max-width: 600px) {
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const FormLabel = styled.p`
	font-family: "Montserrat";
	font-size: 1rem;
	font-weight: 500;
	text-align: left;

	@media (max-width: 600px) {
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const ButtonBox = styled.div`
	padding: 0.5rem;
	margin-top: 2rem;

	@media (max-width: 600px) {
		margin-top: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 1rem;
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
	padding: 0.5rem 0;

	@media (max-width: 600px) {
		width: 1rem;
		padding: 0.8rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 1rem;
	}
`;

export default function EnterTicketDetail() {
	const { setNavLightTheme } = useContext(StateContext);

	useEffect(() => {
		setNavLightTheme(false);
	}, []);

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
			<Head>
				<title>Boletaso | Set Up Payment </title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Wrapper>
					<HeaderWithSearch header='Sell your Tickets' description='Sell Now' />

					<TextBox>
						<MediumHeader>Set up Payment Method</MediumHeader>
						<DescriptionBox>
							<DescriptionMont>
								<strong>Note:</strong> Your Vivid Seats can send payment if your tickets sell. This card
								will not be charged unless payment has been remitted and you or the customer reports an
								issue that is in breach of our Seller Terms and Conditions.
							</DescriptionMont>
						</DescriptionBox>

						<FormWrapper>
							<Box>
								<Label>Enter your PayPal email address</Label>
								<TextField type='text' fullWidth={true} />
							</Box>

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
									<TextField select label='' fullWidth={true} sx={{ width: "100%" }}>
										{monthData.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</BoxSplit>

								<BoxSplit>
									<Label>Exp. year</Label>
									<TextField select label='' fullWidth={true} sx={{ width: "100%" }}>
										{yearData.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</BoxSplit>

								<BoxSplit>
									<Label>CVV</Label>
									<TextField type='text' fullWidth={true} />
								</BoxSplit>
							</SlipWrapper>

							<Box>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox />}
										label={<FormLabel>Agree to the Seller Terms and Conditions</FormLabel>}
										sx={{ fontFamily: "Montserrat" }}
									/>
								</FormGroup>
							</Box>
						</FormWrapper>

						<ButtonBox>
							<FullSolidButton>Submit</FullSolidButton>
						</ButtonBox>
					</TextBox>
				</Wrapper>
			</Container>
		</>
	);
}
