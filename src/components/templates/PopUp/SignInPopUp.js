import React, { useState, useContext } from "react";
import styled from "styled-components";
import Axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

// icons
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Container = styled.div`
  padding: 0 2rem;

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;

const HeaderBox = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Header = styled.p`
  font-size: 1.8rem;
  font-family: "WhyInkHeavy";
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 2.2rem;
  }
`;

const Box = styled.div`
  padding: 0.5rem;
`;

const Label = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const ButtonBox = styled.div`
  padding: 0.5rem;
  margin-top: 2rem;
`;

const Button = styled.div`
  background-color: var(--purpleColor);
  color: #fff;
  font-size: 1.2rem;
  padding: 0.9rem 0;
  text-align: center;
  border-radius: 0.3rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--buttonHover);
  }
  @media (max-width: 600px) {
    width: 80%;
    margin: auto;
    padding: 1rem 0;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.8rem;
    padding: 0.9rem 3rem;
  }
`;

export default function SignInPop({ openSignInPopUp, setOpenSignInPopUp }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpenSignInPopUp(true);
  };

  const handleClose = () => {
    setOpenSignInPopUp(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match")
      return;
    }
    if (password.length < 8) {
      console.log("Password cannot be less than 8 characters.");
      return;
    }
    try {
      await Axios.post(`https://boletaso.sehatpk.com/api/register`, {
        name,
        email,
        password,
      });
      console.log("Registered Successfully")
      setOpenSignInPopUp(false);
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <Dialog
      open={openSignInPopUp}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      disableScrollLock={true}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Container>
          <HeaderBox>
            <Header>Sign up for BOLETASO</Header>
          </HeaderBox>

          <Box>
            <Label>Name</Label>
            <TextField onChange={(e) => setName(e.target.value)}
				required type="text" fullWidth={true} />
          </Box>

          <Box>
            <Label>Email Address</Label>
            <TextField onChange={(e) => setEmail(e.target.value)}
				required type="email" fullWidth={true} />
          </Box>

          <Box>
            <Label>Password</Label>

            <FormControl sx={{}} variant="outlined" fullWidth={true}>
              {/* <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel> */}
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
				  required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                // label='Password'
              />
            </FormControl>
          </Box>

          <Box>
            <Label>Confirm Password</Label>

            <FormControl sx={{}} variant="outlined" fullWidth={true}>
              {/* <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel> */}
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
				  required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                // label='Password'
              />
            </FormControl>
          </Box>

          <ButtonBox>
            <Button onClick={submitHandler}>Sign up</Button>
          </ButtonBox>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
