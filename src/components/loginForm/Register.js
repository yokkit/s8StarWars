import React, { useState } from "react";
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
import styled from "styled-components";
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

let usersListArray = JSON.parse(localStorage.getItem("usersList"));
if (!usersListArray) {
  usersListArray = [];
}
console.log("first", usersListArray);

export default function Register(props) {
  // const [fName, setFName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const dataToStore = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      newsletter: data.has("newsLetter"),
    };
    usersListArray.push(dataToStore);
    console.log(usersListArray);
    localStorage.setItem("usersList", JSON.stringify(usersListArray));
    props.handleCloseRegister();
  };

  const handleClickRegister = () => {
    props.handleOpen();
    props.handleCloseRegister();
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
          <Typography component="h1" variant="h5" color="primary">
            CREATE YOUR ACCOUNT
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  // onChange={(e)=>{setFName(e.target.value)}}
                  // value={fName}
                  // error={fName !== ""}
                  // helperText={fName !== "" ? "Required!" : " "}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      name="newsLetter"
                    />
                  }
                  label={
                    <Typography variant="body2" color="textSecondary">
                      Yes! I would like to receive by email special offers and
                      updates about Lucasfilm Ltd. and other products and
                      services from The Walt Disney Family of Companies. .
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CREATE AN ACCOUNT
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={handleClickRegister}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
