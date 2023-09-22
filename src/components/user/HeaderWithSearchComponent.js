import React from "react";
import styled from "styled-components";

import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

// styles
const Container = styled.section`
	margin: 2rem 0 6rem 0;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	@media (max-width: 600px) {
		/* flex-wrap: wrap; */
		flex-direction: column;
	}
`;

const TitleBox = styled.div`
	padding: 1rem 0;
	flex: 1;

	@media (max-width: 600px) {
		text-align: left;
		width: 90%;
	}
`;

const TitleText = styled.p`
	font-size: 1.7rem;
	font-weight: 700;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;

const TitleDescription = styled.p`
	font-size: 1rem;
	font-weight: 400;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const SearchBox = styled.div``;

export default function HeaderWithSearch({ header, description }) {
	return (
		<Container>
			<Wrapper>
				{/* Title */}
				<TitleBox>
					<TitleText>{header}</TitleText>
					<TitleDescription>{description}</TitleDescription>
				</TitleBox>

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
