import React from "react";
import styled from "styled-components";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

// styles
const Container = styled.section`
	margin-top: 4rem;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	@media (max-width: 600px) {
		flex-wrap: wrap;

		/* flex-direction: column; */
	}
`;

const TitleBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 1rem 0;
	cursor: pointer;
`;

const TitleIcon = styled.img`
	width: 2rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 1.5rem;
	}
`;

const TitleText = styled.p`
	font-size: 1.25rem;
	font-weight: 600;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const HistoryBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex: 1;
	padding: 1rem 0;
	margin-left: 2rem;
	opacity: 0.6;
	cursor: pointer;

	@media (max-width: 600px) {
		margin-left: 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-left: 0.5rem;
	}
`;

const HistoryText = styled.p`
	font-size: 1.2rem;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const SearchBox = styled.div``;

export default function MyTicketHeader() {
	return (
		<Container>
			<Wrapper>
				{/* Title */}
				<TitleBox>
					<TitleIcon
						src='/images/icons/myTicketIcon.png'
						alt='History Button'
						loading='lazy'
						height='auto'
						width='auto'
					/>
					<TitleText>My Tickets</TitleText>
				</TitleBox>

				{/* History Button */}
				<HistoryBox>
					<AccessTimeIcon sx={{ fontSize: "1.6rem", opacity: "0.6" }} />
					<HistoryText>History</HistoryText>
				</HistoryBox>

				<SearchBox>
					<Paper
						component='form'
						sx={{
							p: "2px 4px",
							display: "flex",
							alignItems: "center",
							width: { xs: 350, sm: 300, md: 400 },
							border: "2px solid var(--lightBorder)",
							boxShadow: "none",
						}}
					>
						<IconButton sx={{ p: "10px" }} aria-label='menu'>
							<SearchIcon />
						</IconButton>
						<InputBase
							sx={{
								ml: 1,
								flex: 1,
								fontFamily: "Montserrat",

								"&::placeholder": {},
								input: {
									"&::placeholder": {
										color: "#000",
										fontFamily: "Montserrat",
										fontWeight: "600",
										opacity: "1",
									},
								},
							}}
							placeholder='Search'
							inputProps={{ "aria-label": "search google maps" }}
						/>
						<IconButton type='button' sx={{ p: "10px" }} aria-label='search'>
							<FilterAltOutlinedIcon />
						</IconButton>
					</Paper>
				</SearchBox>
			</Wrapper>
		</Container>
	);
}
