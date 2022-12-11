import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, CircularProgress, Button, Typography, Divider, Chip} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MDliaison from '../assets/images/logo.png';


const theme = createTheme();

export default function Signup() {
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
      marginLeft: '5%'
    };

    const mystyle = {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '21px',
        lineHeight: '24.8px',
        color: 'black'
      };

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
        <img src={MDliaison} alt="" />
        <p style={header}>CONTRACTOR REGISTRATION</p>
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
                <p style={mystyle}>NAME:</p>
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
                <p style={mystyle}>EMAIL:</p>
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

              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>PHONE:</p>
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
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>RATE:</p>
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
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>INDUSTRY:</p>
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
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>CITY:</p>
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
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>RESUME:</p>
              </Grid>
              <Grid item xs={12} sm={6} style={{border: '0px solid red'}}>
              <center>
              <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', height:"40px", width: '40%',  fontSize:"15px"}}
            //   sx={{ mt: 3, mb: 2 }}
            >
              UPLOAD
            </Button>
              </center>
              </Grid>
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                {/* <p style={mystyle}></p> //empty div */}
              </Grid>
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>PICTURE:</p>
              </Grid>
              <Grid item xs={12} sm={6} style={{border: '0px solid red'}}>
              <center>
              <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', height:"40px", width: '40%',  fontSize:"15px"}}
            //   sx={{ mt: 3, mb: 2 }}
            >
              UPLOAD
            </Button>
              </center>
              </Grid>

            </Grid>
            {/* {isLoading ? <center><CircularProgress color="secondary" /></center> :  */}
            <br/>
            <Divider style={{color: 'black'}}>
              <Chip label="......" />
            </Divider>
            <br/>
            <center>
            <Grid item xs={10} sm={2.5} sx={{mr: 5}} style={{border: '0px solid red'}}>
             <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', height:"40px", width: '30%',  fontSize:"15px"}}
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => {
                
              // }}
            >
              SUBMIT
            </Button>
            </Grid>
            </center>
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
