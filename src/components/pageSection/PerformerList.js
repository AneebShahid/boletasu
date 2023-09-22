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
	margin: 0.5rem 0;

	@media (max-width: 600px) {
		margin: 0.5rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		margin: 0.5rem 0;
	}
`;

const ListBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;
	cursor: pointer;
	border-radius: 1rem;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: translateY(-3px);
		box-shadow: 6px 12px 15px 0px rgba(0, 0, 0, 0.1);
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0.5rem;
	}
`;

const ListImageBox = styled.div``;

const ListImage = styled.img`
	width: 3.5rem;
	object-fit: contain;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2.3rem;
	}
`;

const ListTextBox = styled.div``;

const ListTextHeader = styled.p`
	font-size: 1.15rem;
	font-weight: 500;

	@media (max-width: 600px) {
		font-size: 1.1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const ListTextLabel = styled.p`
	color: #464646;
	font-size: 0.9rem;
	font-weight: 400;
	opacity: 0.8;

	@media (max-width: 600px) {
		font-size: 0.8rem;
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
								<ListImageBox>
									<ListImage
										src={item.image}
										alt={item.name}
										loading='lazy'
										height='auto'
										width='auto'
									/>
								</ListImageBox>
								<ListTextBox>
									<ListTextHeader>{item.name}</ListTextHeader>
									<ListTextLabel>{item.event}</ListTextLabel>
								</ListTextBox>
							</ListBox>
						</ListWrapper>
					))}
				</ListContainer>
			</Wrapper>
		</Container>
	);
}
