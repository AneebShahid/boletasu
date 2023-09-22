import React, { useEffect, useContext } from "react";
import StateContext from "@/context/StateContext";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material";

// component
import HeaderWithSearch from "@/components/user/HeaderWithSearchComponent";
import MediumHeader from "@/components/templates/textTemplate/MediumHeader";
import DescriptionMont from "@/components/templates/textTemplate/DescriptionMont";
import FullSolidButton from "@/components/templates/button/FullSolidButton";

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
	padding: 1rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.5rem;
	}
`;

const BoxSplit = styled.div`
	padding: 1rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.5rem;
	}
`;

const SlipWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

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

const ButtonBox = styled.div`
	padding: 0.5rem;
	margin-top: 4rem;

	@media (max-width: 600px) {
		margin-top: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

export default function EnterTicketDetail() {
	const { setNavLightTheme } = useContext(StateContext);

	useEffect(() => {
		setNavLightTheme(false);
	}, []);

	const deliveryMethodData = [
		{
			value: "Delivery 1",
			label: "Delivery 1",
		},
		{
			value: "Delivery 2",
			label: "Delivery 2",
		},
		{
			value: "Delivery 3",
			label: "Delivery 3",
		},
		{
			value: "Delivery 4",
			label: "Delivery 4",
		},
	];

	const locationData = [
		{
			value: "Location 1",
			label: "Location 1",
		},
		{
			value: "Location 2",
			label: "Location 2",
		},
		{
			value: "Location 3",
			label: "Location 3",
		},
		{
			value: "Location 4",
			label: "Location 4",
		},
	];

	return (
		<>
			<Head>
				<title>Boletaso | Enter Ticket Details </title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Wrapper>
					<HeaderWithSearch header='Sell your Tickets' description='Sell Now' />

					<TextBox>
						<MediumHeader>Enter Details</MediumHeader>
						<DescriptionBox>
							<DescriptionMont>
								<strong>Note:</strong> You must include any disclosures that are printed on the ticket
								or that were presented to you at the time of ticket purchase (i.e. obstructed view, ADA
								seating, etc.).
							</DescriptionMont>
						</DescriptionBox>

						<FormWrapper>
							<Box>
								<Label>Ticket</Label>
								<TextField type='text' fullWidth={true} />
							</Box>

							<SlipWrapper>
								<BoxSplit>
									<Label>Section</Label>
									<TextField type='text' fullWidth={true} />
								</BoxSplit>

								<BoxSplit>
									<Label>Row</Label>
									<TextField type='text' fullWidth={true} />
								</BoxSplit>

								<BoxSplit>
									<Label>Seat No.</Label>
									<TextField type='text' fullWidth={true} />
								</BoxSplit>
							</SlipWrapper>

							<Box>
								<Label>delivery Method</Label>

								<TextField select label='' fullWidth={true}>
									{deliveryMethodData.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Box>

							<Box>
								<Label>Your Location</Label>

								<TextField select label='' fullWidth={true}>
									{locationData.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Box>
						</FormWrapper>

						<ButtonBox>
							<Link href='/user/setUpPayment'>
								<FullSolidButton>Continue</FullSolidButton>
							</Link>
						</ButtonBox>
					</TextBox>
				</Wrapper>
			</Container>
		</>
	);
}
