import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divider, MenuItem, TextField } from "@mui/material";

// component
import SliderHeader from "../templates/SliderHeader";
// Event Dialog Pop Up
import EventPopup from "../templates/PopUp/EventSeatListPopUp";

// icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// styles
const Container = styled.div``;

const Wrapper = styled.div``;

const HeaderBox = styled.div``;

const MenuWrapper = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 2rem 0;

	@media (max-width: 600px) {
		width: 100%;
		flex-direction: column;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 50%;
		margin: 1rem 0;
	}
`;

const MenuBox = styled.div`
	width: 100%;
`;

const UserLocationBox = styled.div``;

const UserLocationHeader = styled.p`
	font-size: 1.8rem;
	font-weight: 600;

	@media (max-width: 600px) {
		font-size: 1.1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.85rem;
	}
`;

const ListContainer = styled.div`
	margin-top: 3rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 2rem;
	}
`;

const ListWrapper = styled.div`
	background-color: #e6e5ff;
	border-radius: 0.5rem;
	margin: 2rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin: 1rem 0;
	}
`;

const ListBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 1.5rem 1rem;

	@media (max-width: 600px) {
		flex-direction: column;
		text-align: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 1rem;
		padding: 1rem;
	}
`;

const ListDateBox = styled.div``;

const ListDateText = styled.p`
	font-size: 1.3rem;
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

const ButtonBox = styled.div``;

const Button = styled.button`
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
		padding: 0.6rem 1rem;
	}
`;

const ShowAllButtonBox = styled.div``;

const ShowAllButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.3rem;
	background-color: var(--purpleColor);
	color: #fff;
	font-size: 0.9rem;
	font-weight: 600;
	padding: 0.8rem 1.5rem;
	border-radius: 2rem;

	@media (max-width: 600px) {
		font-size: 1rem;
		padding: 1rem 2.5rem;
		margin: auto;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.55rem;
		padding: 0.6rem 1rem;
	}
`;

export default function EventList({ sectionHeader, dataList }) {
	const [showAllList, setShowAllList] = useState(false);
	const [openEventPopUp, setOpenEventPopUp] = useState(false);
	const [eventListDetailToForward, setEventListDetailToForward] = useState(null);
	const [eventListNameToForward, setEventListNameToForward] = useState("");
	const [eventListDescriptionToForward, setEventListDescriptionToForward] = useState("");

	const visibleListItem = showAllList ? dataList : dataList.slice(0, 4);

	const locationData = [
		{
			title: "American Fork, UT",
			value: "American Fork, UT",
		},
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
					<SliderHeader>{sectionHeader}</SliderHeader>
				</HeaderBox>

				<Divider sx={{ mt: 3 }} />

				<MenuWrapper>
					<MenuBox>
						<TextField
							select
							size='small'
							sx={{
								backgroundColor: "var(--purpleColor)",
								overflow: "hidden",
								color: "#fff",
								fontFamily: "Montserrat",
								fontWeight: "700",
								width: "100%",
								borderRadius: ".3rem",
								textAlign: "center",

								".MuiInputBase-input": {
									fontSize: { xs: "1rem", sm: "0.7rem", md: "1rem", fontWeight: "600" },
								},
								"& .MuiSvgIcon-root": {
									color: "white",
								},

								"& .MuiOutlinedInput-notchedOutline": {
									border: "none",
								},
								"&.Mui-focused": {
									"& .MuiOutlinedInput-notchedOutline": {
										border: "none",
									},
								},
							}}
							InputProps={{
								style: {
									color: "#fff",
									fontFamily: "Montserrat",
								},
							}}
							InputLabelProps={{
								style: { color: "#fff", fontFamily: "Montserrat", fontSize: { sm: "0.7rem" } },
							}}
							defaultValue='American Fork, UT'
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
							size='small'
							sx={{
								color: "#fff",
								fontFamily: "Montserrat",
								width: "100%",
								textAlign: "center",

								".MuiInputBase-input": {
									fontSize: { xs: "1rem", sm: "0.7rem", md: "1rem", fontWeight: "600" },
								},
							}}
							InputLabelProps={{
								style: { fontFamily: "Montserrat" },
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

				<UserLocationBox>
					<UserLocationHeader>Shows near American Fork, UT</UserLocationHeader>
				</UserLocationBox>

				<ListContainer>
					{visibleListItem.map((item, index) => (
						<ListWrapper key={index}>
							<ListBox>
								{/* Date Value */}
								<ListDateBox>
									<ListDateText>
										{item.dateMonth}
										<br />
										{item.dateDay}
									</ListDateText>
								</ListDateBox>
								{/* Event Name and Location */}
								<ListTextBox>
									<ListTextHeader>{item.eventName}</ListTextHeader>
									<ListTextLocation>{item.eventLocation}</ListTextLocation>
								</ListTextBox>
								{/* Button for the dialog box */}
								<ButtonBox>
									<Button
										onClick={() => {
											setOpenEventPopUp(true);
											setEventListNameToForward(item.eventName);
											setEventListDescriptionToForward(item.eventLocation);
											setEventListDetailToForward(item.eventListingData);
										}}
									>
										{item.eventPrice}
									</Button>
								</ButtonBox>
							</ListBox>
						</ListWrapper>
					))}
				</ListContainer>
				{!showAllList && (
					<ShowAllButtonBox>
						<ShowAllButton onClick={() => setShowAllList(true)}>
							View More
							<ArrowDropDownIcon sx={{ fontSize: "1.2rem" }} />
						</ShowAllButton>
					</ShowAllButtonBox>
				)}
			</Wrapper>

			<EventPopup
				openPopUp={openEventPopUp}
				setOpenPopUp={setOpenEventPopUp}
				eventName={eventListNameToForward}
				eventDescription={eventListDescriptionToForward}
				eventListingData={eventListDetailToForward}
			/>
		</Container>
	);
}
