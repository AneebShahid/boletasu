import React, { useEffect, useContext } from "react";
import StateContext from "@/context/StateContext";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
	padding: 5rem 0;

	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 4rem 0;
	}
`;

const TextBox = styled.div`
	text-align: center;
`;

const DescriptiontBox = styled.div`
	margin-top: 1rem;
`;

const FieldContainer = styled.div`
	width: 45%;
	margin: 4rem auto 0 auto;

	@media (max-width: 600px) {
		width: 100%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 65%;
		margin: 3rem auto 0 auto;
	}
`;

const Box = styled.div`
	padding: 0.5rem;
`;

const Label = styled.p`
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;

	@media (max-width: 600px) {
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.75rem;
	}
`;

const ButtonBox = styled.div`
	padding: 0.5rem;
	margin-top: 3rem;

	@media (max-width: 600px) {
		margin-top: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

export default function SelectEvent() {
	const { setNavLightTheme } = useContext(StateContext);

	useEffect(() => {
		setNavLightTheme(false);
	}, []);

	const eventName = [
		{
			value: "Event 1",
			label: "Event 1",
		},
		{
			value: "Event 2",
			label: "Event 2",
		},
		{
			value: "Event 3",
			label: "Event 3",
		},
		{
			value: "Event 4",
			label: "Event 4",
		},
	];

	return (
		<>
			<Head>
				<title>Boletaso | Select Event </title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Wrapper>
					<HeaderWithSearch header='Sell your Tickets' description='Sell Now' />

					<TextBox>
						<MediumHeader>Select Event & Date</MediumHeader>
						<DescriptiontBox>
							<DescriptionMont>
								Select the event name and then the specific date you&#39;re selling ticket
							</DescriptionMont>
						</DescriptiontBox>
					</TextBox>

					<FieldContainer>
						<Box>
							<Label>Event Name</Label>

							<TextField select label='' fullWidth={true}>
								{eventName.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										MenuItem
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Box>

						<Box>
							<Label>Date</Label>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									inputFormat='MM/dd/yyyy'
									// value={}
									// onChange={(value) => setDate(value)}
									slotProps={{ textField: { fullWidth: true } }}
								/>
							</LocalizationProvider>
						</Box>

						<ButtonBox>
							<Link href='/user/userLogin'>
								<FullSolidButton>Continue</FullSolidButton>
							</Link>
						</ButtonBox>
					</FieldContainer>
				</Wrapper>
			</Container>
		</>
	);
}
