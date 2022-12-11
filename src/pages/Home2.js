import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, CircularProgress, Button, Typography} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function Home2() {
   const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const mystyle = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '30px',
      color: 'black'
    };

  const userSignup = () => {
    history.push('/3');
  }

  return (
      <Layout>
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
          <form component="form" onSubmit={userSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} sx={{mt: 0}}>
                <p style={mystyle}>TEAM ID:</p>
              </Grid>
              <Grid item xs={12} sm={6}>
              <p style={mystyle}>498711</p>
              </Grid>
              <br/><br/>
              <Grid item xs={12} sm={6} sx={{mt: 0}}>
                <p style={mystyle}>TEAM NAME:</p>
              </Grid>
              <Grid item xs={12} sm={6}>
              <p style={mystyle}>RHYTHM B</p>
              </Grid>
              <br/><br/><br/><br/>
              <Grid item xs={12} sm={6} sx={{mt: 0}}>
                <p style={mystyle}>LEAGUE CODE:</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  style={{border: '1px solid black', width: 220, height: 40, padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>
            </Grid>
            {/* {isLoading ? <center><CircularProgress color="secondary" /></center> :  */}
            <br/><br/>
            <center>
             <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', height:"40px", width: '50%',  fontSize:"15px"}}
              sx={{ mt: 3, mb: 2 }}
            >
              APPLY
            </Button>
            </center>
            {/* <Grid container justifyContent="center">
              <Grid item>
                <NavLink to="/signin" variant="body2">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid> */}
            </form>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>


      </Layout>
  );
}
