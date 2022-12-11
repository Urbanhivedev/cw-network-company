import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions,FormControlLabel, Checkbox, CardContent, CircularProgress, Button, Typography} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function Home3() {
   const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
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
    history.push('/5');
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
              <br/><br/>
              <Grid item xs={12} sm={6} sx={{mt: 0}}>
                <p style={mystyle}>LEAGUE CODE:</p>
              </Grid>
              <Grid item xs={12} sm={6}>
              <p style={mystyle}>11009</p>
              </Grid>
              <Grid item xs={12} sm={6} sx={{mt: 0}}>
                <p style={mystyle}>LEAGUE NAME:</p>
              </Grid>
              <Grid item xs={12} sm={6}>
              <p style={mystyle}>PHANTOM LEAGUE</p>
              </Grid>
              <Grid item xs={12} sm={6} sx={{mt: 0}}>
                <p style={mystyle}>FEE:</p>
              </Grid>
              <Grid item xs={12} sm={6}>
              <p style={mystyle}>N10,000</p>
              </Grid>
            </Grid>
            {/* {isLoading ? <center><CircularProgress color="secondary" /></center> :  */}
            <br/>
            <Grid container justifyContent="center">
          <FormControlLabel
            control={
              <Checkbox style={{color: 'black'}} required checked={checked} onChange={() => {setChecked(!checked)}} name="gilad" />
            }
            label={<span style={{ fontSize: '17px' }}>AGREE PURCHASE</span>} 
          />
            </Grid>
            <center>
             <Button
              type="submit" 
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', height:"40px", width: '50%',  fontSize:"15px"}}
              sx={{ mt: 3, mb: 2 }}
            >
              JOIN
            </Button>
            </center>
            </form>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>


      </Layout>
  );
}
