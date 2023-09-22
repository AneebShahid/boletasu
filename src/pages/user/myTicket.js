import React, { useEffect, useContext } from "react";
import StateContext from "@/context/StateContext";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { Grid } from "@mui/material";

// component
import MyTicketHeader from "@/components/user/MyTicketHeader";

// styled
const Container = styled.section`
	padding: 4rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 0;
	}
`;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;
`;

const GridContainer = styled.div`
	padding: 4rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 4rem 0;
	}
`;

const GridWrapper = styled.div``;

const TicketContainer = styled.div``;

const TicketWrapper = styled.div`
	margin-bottom: 2rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 1rem;
	}
`;

const TicketBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 1rem;
	border: 1px solid var(--lightBorder);
	border-radius: 0.5rem;
	cursor: pointer;

	&:hover {
		transition: all 0.25s ease-in-out;
		transform: translateX(6px);
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 0.6rem;
	}
`;

const TicketImageBox = styled.div``;

const TicketImage = styled.img`
	width: 4.5rem;

	@media (max-width: 600px) {
		width: 3.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 3rem;
	}
`;

const TicketTextBox = styled.div`
	flex: 1;
`;

const TicketTextName = styled.p`
	font-size: 1.25rem;
	font-weight: 600;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const TicketTextDetail = styled.p`
	font-size: 0.95rem;
	font-weight: 500;
	margin-top: 0.5rem;
	opacity: 0.7;

	@media (max-width: 600px) {
		font-size: 0.8rem;
		font-weight: 400;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.6rem;
		margin-top: 0.3rem;
	}
`;

const TicketPriceBox = styled.div``;

const TicketPriceTextBox = styled.p`
	color: var(--purpleColor);
	font-family: "Montserrat";
	font-size: 1.7rem;
	font-weight: 600;

	@media (max-width: 600px) {
		font-size: 1.4rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;

const AddTicketContainer = styled.div``;

const AddTicketWrapper = styled.div`
	width: 100%;
	text-align: center;
	padding: 6rem 0;
	border: 1px solid var(--lightBorder);
	border-radius: 0.5rem;
	cursor: pointer;

	@media (max-width: 600px) {
		padding: 2rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 0;
	}
`;

const AddTicketInput = styled.input`
	display: none;
`;

const AddTicketIcon = styled.img`
	width: 5rem;

	@media (max-width: 600px) {
		width: 3.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 3rem;
	}
`;

const AddTicketText = styled.p`
	font-size: 1.25rem;
	font-weight: 600;
	margin-top: 1rem;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

export default function MyTicket() {
	const { setNavLightTheme } = useContext(StateContext);

	useEffect(() => {
		setNavLightTheme(false);
	}, []);

	const ticketData = [
		{
			name: "Thousand Below with Until I Wake",
			details: "Thu Jul 13 at 7:00pm",
			image: "/images/icons/ticketIcon.png",
			price: "$60",
		},
		{
			name: "Thousand Below with Until I Wake",
			details: "Thu Jul 13 at 7:00pm",
			image: "/images/icons/ticketIcon.png",
			price: "$60",
		},
		{
			name: "Thousand Below with Until I Wake",
			details: "Thu Jul 13 at 7:00pm",
			image: "/images/icons/ticketIcon.png",
			price: "$60",
		},
	];

	return (
		<>
			<Head>
				<title>Boletaso | My Tickets </title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Wrapper>
					<MyTicketHeader />

					<GridContainer>
						<Grid container spacing={6} justifyContent='space-between' direction='row-reverse'>
							<Grid item xs={12} sm={5} md={5}>
								<AddTicketContainer>
									<AddTicketInput id='selectTicket' type='file' />
									<AddTicketWrapper
										onClick={() => {
											document.getElementById("selectTicket").click();
											console.log("button");
										}}
									>
										<AddTicketIcon
											src='/images/icons/addIcon.png'
											alt='Add Ticket'
											loading='lazy'
											height='auto'
											width='auto'
										/>
										<AddTicketText>Add Ticket</AddTicketText>
									</AddTicketWrapper>
								</AddTicketContainer>
							</Grid>

							<Grid item xs={12} sm={7} md={7}>
								<TicketContainer>
									{ticketData.map((item, index) => (
										<TicketWrapper key={index}>
											<TicketBox>
												<TicketImageBox>
													<TicketImage
														src={item.image}
														alt={item.name}
														loading='lazy'
														height='auto'
														width='auto'
													/>
												</TicketImageBox>

												<TicketTextBox>
													<TicketTextName>{item.name}</TicketTextName>
													<TicketTextDetail>{item.details}</TicketTextDetail>
												</TicketTextBox>

												<TicketPriceBox>
													<TicketPriceTextBox>{item.price}</TicketPriceTextBox>
												</TicketPriceBox>
											</TicketBox>
										</TicketWrapper>
									))}
								</TicketContainer>
							</Grid>
						</Grid>
					</GridContainer>
				</Wrapper>
			</Container>
		</>
	);
}
