import React from "react";
import styled from "styled-components";
import { MenuItem, TextField, Divider } from "@mui/material";

// component
import Header from "@/components/templates/SliderHeader";

// styles
const Container = styled.section`
	padding: 4rem 0 2rem 0;

	@media (max-width: 600px) {
		padding: 2rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 1.5rem 0;
	}
`;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;
`;

const HeaderBox = styled.div`
	margin-bottom: 1.5rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 1rem;
	}
`;

const LocationTextBox = styled.div``;

const LocationText = styled.p`
	font-family: "WhyInkReg";
	font-size: 2.5rem;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;

const MenuWrapper = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 1.5rem;

	@media (max-width: 600px) {
		width: 100%;
		flex-direction: column;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 40%;
	}
`;

const MenuBox = styled.div`
	width: 100%;
`;

export default function BrowseDropdown() {
	const locationData = [
		{
			title: "Carlifornia",
			value: "Carlifornia",
		},
		{
			title: "Texas",
			value: "Texas",
		},
		{
			title: "Miami",
			value: "Miami",
		},
		{
			title: "Washington",
			value: "Washington",
		},
	];

	return (
		<Container>
			<Wrapper>
				<HeaderBox>
					<Header light={false} bold={true}>
						Browse Events
					</Header>
				</HeaderBox>

				<LocationTextBox>
					<LocationText>America Fort, UT</LocationText>
				</LocationTextBox>

				<MenuWrapper>
					<MenuBox>
						<TextField
							select
							sx={{ color: "#fff", fontFamily: "Montserrat", width: "100%", fontFamily: "Poppins" }}
							label='Change Location'
						>
							{locationData.map((option, index) => (
								<MenuItem key={index} value={option.value}>
									{option.title}
								</MenuItem>
							))}
						</TextField>
					</MenuBox>

					<MenuBox>
						<TextField
							select
							sx={{
								color: "#fff",
								fontFamily: "Montserrat",
								width: "100%",
								fontFamily: "Poppins",
							}}
							label='Filter By Date'
						>
							{locationData.map((option, index) => (
								<MenuItem key={index} value={option.value}>
									{option.title}
								</MenuItem>
							))}
						</TextField>
					</MenuBox>
				</MenuWrapper>

				<Divider sx={{ mt: 5, backgroundColor: "#464646", height: 2, opacity: ".5" }} />
			</Wrapper>
		</Container>
	);
}
