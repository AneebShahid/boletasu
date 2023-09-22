import React from "react";
import styled from "styled-components";

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button } from "@mui/material";

// component
import MediumHeader from "../textTemplate/MediumHeader";
import DescriptionMont from "../textTemplate/DescriptionMontDark";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

// styles
const Container = styled.div`
	padding: 2rem;

	@media (max-width: 600px) {
		padding: 1rem 0;
	}
`;

const Wrapper = styled.div``;

const ImageBox = styled.div`
	text-align: center;
`;

const Image = styled.img`
	width: 5rem;
	object-fit: contain;

	@media (max-width: 600px) {
		width: 4rem;
	}
`;

const TextBox = styled.div`
	text-align: center;
	margin-top: 1rem;
`;

const ButtonBox = styled.div`
	margin-top: 3rem;
`;

export default function SuccessPopUp({ open, setOpen }) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
			<DialogContent>
				<Container>
					<Wrapper>
						<ImageBox>
							<Image
								src='/images/icons/successIcon.png'
								alt='Payment is successful'
								loading='lazy'
								height='auto'
								width='auto'
							/>
						</ImageBox>
						<TextBox>
							<MediumHeader>Congratulations!</MediumHeader>
							<DescriptionMont>You have successfully bought your ticket.</DescriptionMont>

							<ButtonBox>
								<Button
									size='large'
									variant='outlined'
									sx={{
										textTransform: "none",
										backgroundColor: "var(--purpleColor)",
										color: "#fff",
										fontFamily: "Montserrat",
										fontWeight: "700",
										padding: ".55rem 1rem",

										"&:hover": { color: "var(--purpleColor)" },
									}}
									onClick={handleClose}
								>
									Continue to Buying
								</Button>
							</ButtonBox>
						</TextBox>
					</Wrapper>
				</Container>
			</DialogContent>
		</Dialog>
	);
}
