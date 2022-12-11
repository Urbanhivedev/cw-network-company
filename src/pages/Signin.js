import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, CircularProgress, Button, Typography, Divider, Chip} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/images/logo.png';


const theme = createTheme();

export default function Signin() {
   const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const header = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '29px',
      lineHeight: '30.4px',
      color: 'black',
      marginLeft: '10%'
    };

    const mystyle = {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '21px',
        lineHeight: '24.8px',
        color: 'black'
      };

      useEffect(()=>{
        console.log("Hello")
      },[])

  const userSignup = () => {
    history.push('/2');
  }

  return (
    //   <Layout>
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{border: '0px solid red' }}>
        <div style={{marginLeft: '20%'}}>
        <CssBaseline /><br/><br/>
        <div style={{marginLeft: '10%'}}>
        <img src={logo} alt="CW network logo" />
        <p style={header}>CONTRACTOR LOGIN</p>
        {console.log("hell")}
        </div>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center"
          }}
        >
          <Box>
          <form component="form" onSubmit={userSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>EMAIL:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={''}
                />
              </Grid>
              <br/><br/><br/>
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>PASSWORD:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  style={{border: '1px solid black', width: 380, height: 45, padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>
           
              <Grid item xs={12} sm={12} style={{border: '0px solid red'}}>
              <center>
              <a href="#"><p style={mystyle}>FORGOT PASSWORD?</p></a>
            </center>
              </Grid>
              <br/><br/><br/>
              <Grid item xs={12} sm={12} style={{border: '0px solid red'}}>
              <center>
             <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', height:"40px", width: '30%',  fontSize:"15px"}}
            //   sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
            </center>
              </Grid>

              
              


            </Grid>
            {/* {isLoading ? <center><CircularProgress color="secondary" /></center> :  */}
            <br/><br/>

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
        </div>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>


    //   </Layout>
  );
}
