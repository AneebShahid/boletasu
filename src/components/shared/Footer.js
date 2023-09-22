import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Divider } from "@mui/material";

const Container = styled.footer`
	background-color: #000;
	padding: 4rem 0;
`;

const Wrapper = styled.div`
	width: 92%;
	margin: auto;

	@media (max-width: 600px) {
		width: 95%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const LogoWrapper = styled.div``;

const LogoBox = styled.div`
	@media (max-width: 600px) {
		text-align: center;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const LogoImage = styled.img`
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 7rem;
	}
`;

const TextBox = styled.div`
	@media (max-width: 600px) {
		text-align: center;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const Description = styled.p`
	color: #fff;
	font-size: 0.9rem;
	font-weight: 300;
	line-height: 1.5;
	margin-top: 1rem;

	@media (max-width: 600px) {
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.6rem;
	}
`;

const LinkWrapper = styled.div`
	@media (max-width: 600px) {
		text-align: center;
		margin: 3rem 0;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const LinkHeader = styled.p`
	color: #fff;
	font-family: "WhyInkHeavy";
	font-size: 1.4rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.2rem;
	}
`;

const LinkHeaderLine = styled.hr`
	background-color: #3e39d1;
	width: 20%;
	height: 3px;
	border: none;
	margin-top: 0.2rem;

	@media (max-width: 600px) {
		width: 20%;
		margin: auto;
		margin-top: 0.5rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const LinkBoxWrapper = styled.div`
	margin-top: 1.5rem;
`;

const LinkBox = styled.div`
	margin: 0.6rem 0;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin: 0.3rem 0;
	}
`;

const LinkButton = styled.button`
	background: transparent;
	color: #fff;
	font-size: 0.95rem;
	padding: 0.3rem;

	&:hover {
		color: var(--buttonHover);
		transition: all 0.2s ease-in-out;
	}
	@media (max-width: 600px) {
		font-size: 1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.65rem;
	}
`;

const SocialMediaWrapper = styled.div``;

const SocialMediaHeader = styled.p`
	color: #fff;
	font-family: "WhyInkHeavy";
	font-size: 1.2rem;
	margin-bottom: 1rem;
	text-align: center;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1rem;
	}
`;

const SocialMediaBoxWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0.5rem;
	}
`;

const SocialMediaBox = styled.div``;

const SocialMediaIcon = styled.img`
	cursor: pointer;

	@media (max-width: 600px) {
		width: 3rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const CopyWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 600px) {
		flex-direction: column;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const CopyBox = styled.div``;

const CopyText = styled.div`
	color: #fff;
	font-size: 1rem;
	font-weight: 300;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.65rem;
	}
`;

const CopyButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 1rem;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0.5rem;
	}
`;

const CopyButton = styled.button`
	background: transparent;
	color: #fff;
	font-size: 0.85rem;
	padding: 0.3rem;

	&:hover {
		color: var(--buttonHover);
		transition: all 0.2s ease-in-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.65rem;
	}
`;

export default function Footer() {
	const [yearValue, setYearValue] = useState("");

	const linkData = [
		{ title: "About", link: "/" },
		{ title: "News", link: "/" },
		{ title: "BOLETASO Blog", link: "/" },
		{ title: "Sell on BOLETASO", link: "/" },
	];

	const socialData = [
		{ icon: "/images/icons/facebookIcon.png", link: "/" },
		{ icon: "/images/icons/twitterIcon.png", link: "/" },
		{ icon: "/images/icons/instagramIcon.png", link: "/" },
	];

	const copyData = [
		{ title: "Privacy preferences", link: "/" },
		{ title: "Term of Services", link: "/" },
		{ title: "Privacy Policy", link: "/" },
		{ title: "Sitemap", link: "/" },
	];

	const yearHandler = () => {
		const date = new Date();
		const year = date.getFullYear();
		setYearValue(year);
	};

	useEffect(() => {
		yearHandler();
	}, []);

	return (
		<Container>
			<Wrapper>
				<Grid container justifyContent='space-between'>
					<Grid item xs={12} sm={5} md={5}>
						<LogoWrapper>
							<LogoBox>
								<LogoImage src='/logo.png' alt='Boletaso' height='auto' width='auto' loading='lazy' />
							</LogoBox>
							<TextBox>
								<Description>
									Lorem ipsum dolor sit amet consectetur. Faucibus cursus mauris volutpat blandit
									integer turpis quis. Consequat laoreet aliquet lectus dictum purus quis est. Nullam
									metus quam potenti quis.
								</Description>
							</TextBox>
						</LogoWrapper>
					</Grid>

					<Grid item xs={12} sm={3} md={3}>
						<LinkWrapper>
							<LinkHeader>Resources</LinkHeader>
							<LinkHeaderLine />

							<LinkBoxWrapper>
								{linkData.map((item, index) => (
									<LinkBox key={index}>
										<LinkButton>{item.title}</LinkButton>
									</LinkBox>
								))}
							</LinkBoxWrapper>
						</LinkWrapper>
					</Grid>

					<Grid item xs={12} sm={2} md={2}>
						<SocialMediaWrapper>
							<SocialMediaHeader>Follow Us</SocialMediaHeader>

							<SocialMediaBoxWrapper>
								{socialData.map((item, index) => (
									<SocialMediaBox key={index}>
										<SocialMediaIcon
											src={item.icon}
											alt={item.link}
											height='auto'
											width='auto'
											loading='lazy'
										/>
									</SocialMediaBox>
								))}
							</SocialMediaBoxWrapper>
						</SocialMediaWrapper>
					</Grid>
				</Grid>

				<Divider sx={{ backgroundColor: "#fff", opacity: ".3", margin: "2rem 0" }} />

				<CopyWrapper>
					<CopyBox>
						<CopyText>&copy; {yearValue} BOLETASO. All rights reserved.</CopyText>
					</CopyBox>

					<CopyButtonBox>
						{copyData.map((item, index) => (
							<CopyButton key={index}>{item.title}</CopyButton>
						))}
					</CopyButtonBox>
				</CopyWrapper>
			</Wrapper>
		</Container>
	);
}
