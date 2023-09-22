import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
	position: fixed;
	z-index: 10;
	top: 15%;
	right: 1%;

	@media (max-width: 600px) {
		top: 10%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		top: 10%;
	}
`;

const Button = styled.button`
	/* color */
	background-color: #fff;
	border: 1px solid transparent;
	/* display */
	display: flex;
	align-items: center;
	gap: 0.5rem;
	/* font */
	font-size: 0.95rem;
	font-weight: 500;
	padding: 0.5rem 1rem;
	border-radius: 2rem;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
		rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

	@media (max-width: 600px) {
		font-size: 0.85rem;
		padding: 0.5rem 0.8rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
		padding: 0.3rem 0.8rem;
	}
`;

const ButtonIcon = styled.img`
	width: 1.5rem;
	object-fit: contain;

	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

export default function LanguageButton() {
	const { t, i18n } = useTranslation();

	return (
		<Container>
			<Button
				onClick={() => {
					i18n.language === "en" ? i18n.changeLanguage("es") : i18n.changeLanguage("en");
				}}
			>
				<ButtonIcon
					src={i18n.language === "en" ? "/images/icons/flags/es.png" : "/images/icons/flags/us.png"}
					alt='Boletaso Language Button'
					loading='lazy'
					height='auto'
					width='auto'
				/>

				{i18n.language === "en" ? "Espaniol" : "English"}
			</Button>
		</Container>
	);
}
