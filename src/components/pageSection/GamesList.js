import React from "react";
import styled from "styled-components";

// component
import SliderHeader from "../templates/SliderHeader";

// styles
const Container = styled.div``;

const Wrapper = styled.div``;

const HeaderBox = styled.div``;

const ListContainer = styled.div`
	margin-top: 2rem;

	@media (max-width: 600px) {
		margin-top: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 1rem;
	}
`;

const ListWrapper = styled.div`
	margin: 2rem 0;

	@media (max-width: 600px) {
		margin: 1.5rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin: 0.5rem 0;
	}
`;

const ListBox = styled.div`
	cursor: pointer;
	border-radius: 0.5rem;
	overflow: hidden;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: translateX(-3px);
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0.5rem;
	}
`;

const ListImageBox = styled.div``;

const ListImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ListTextWrapper = styled.div`
	background-color: #8886b7;
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 0.7rem 1.5rem;

	@media (max-width: 600px) {
		gap: 1rem;
		padding: 0.7rem 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0.7rem;
		padding: 0.5rem 0.7rem;
	}
`;

const ListDateBox = styled.div`
	background-color: #04032d;
	border-radius: 0.2rem;
	text-align: center;
	padding: 0.4rem;
`;

const ListDate = styled.p`
	color: #fff;
	font-size: 1.55rem;
	font-weight: 600;
	line-height: 1.1;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
`;

const ListTextBox = styled.div`
	color: #fff;
`;

const ListTextHeader = styled.p`
	font-size: 1.4rem;
	font-weight: 500;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 20ch;

	@media (max-width: 600px) {
		font-size: 1.3rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const ListTextLabel = styled.p`
	font-size: 1.05rem;
	font-weight: 400;
	opacity: 0.9;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 20ch;

	@media (max-width: 600px) {
		font-size: 0.9rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.5rem;
	}
`;

export default function PerformerList({ sectionHeader, dataList }) {
	return (
		<Container>
			<Wrapper>
				<HeaderBox>
					<SliderHeader>{sectionHeader}</SliderHeader>
				</HeaderBox>

				<ListContainer>
					{dataList.map((item, index) => (
						<ListWrapper key={index}>
							<ListBox>
								{/* Game Image */}
								<ListImageBox>
									<ListImage
										src={item.image}
										alt={item.gameName}
										loading='lazy'
										height='auto'
										width='auto'
									/>
								</ListImageBox>
								{/* Game Text Detail */}
								<ListTextWrapper>
									<ListDateBox>
										<ListDate>{item.month}</ListDate>
										<ListDate>{item.date}</ListDate>
									</ListDateBox>
									<ListTextBox>
										<ListTextHeader>{item.gameName}</ListTextHeader>
										<ListTextLabel>{item.gameLocation}</ListTextLabel>
									</ListTextBox>
								</ListTextWrapper>
							</ListBox>
						</ListWrapper>
					))}
				</ListContainer>
			</Wrapper>
		</Container>
	);
}
