import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../app/provider";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yellow, red } from "@mui/material/colors";

const ImageLogo = styled.img`
  width: 180px;
  margin-bottom: 1rem;
`;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: yellow,
    secondary: red,
  },
});

export default function SignIn(props) {
  const [isLogin, setIsLogin] = useContext(AppContext);
  const [isError, setIsError] = useState(false);
  console.log("Current status of isLogin", isLogin);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log("logged in", {
      email: data.get("email"),
      password: data.get("password"),
    });
    const currentEmail = data.get("email").trim();
    const currentPassword = data.get("password").trim();
    const storedUsersList = JSON.parse(localStorage.getItem("usersList"));
    const loginStatus = () => {
      for (let data of storedUsersList) {
        if (data.email === currentEmail && data.password === currentPassword) {
          props.handleClose();
          console.log("Now you are logged in!");
          return true;
        }
      }
      setIsError(true);
      return false;
    };
    setIsLogin(loginStatus);
  };
  const handleClickRegister = () => {
    props.handleOpenRegister();
    props.handleClose();
  };

  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    p: 2,
    border: 1,
    borderRadius: 1,
    width: "90%",
    height: "100%",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ImageLogo src="logoBig.png" />
          <Typography component="h1" variant="h5">
            SIGN IN
          </Typography>
          {isError && (
            <Box
              sx={{
                ...commonStyles,
                borderColor: "secondary.main",
                color: "secondary.main",
              }}
            >
              The credentials you entered are incorrect. Reminder: passwords are
              case sensitive.
            </Box>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleClickRegister}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
