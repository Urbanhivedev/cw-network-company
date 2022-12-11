import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Button, Typography, ButtonBase} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import JobLogo from '../assets/images/logo.png';


const theme = createTheme();

export default function ViewJob() {
    const dispatch = useDispatch();
    const history = useHistory();

    const myHeader = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '37px',
      lineHeight: '30px',
      color: 'black',
      marginLeft: '50px',
      marginTop: '10px'
    };
    const mystyle = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '22px',
      color: 'black',
      marginTop: '5px'
    };

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
  return (
      <Layout>
         <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
          <Paper
            sx={{
                border: '1px solid black',
                p: 1,
                margin: 'auto',
                // maxWidth: 2000,
                minWidth: 600,
                flexGrow: 1,
               
                 }}
             >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 148, height: 148 }}>
            <img alt="Job-Logo" src={JobLogo} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <br/><br/>
            <Grid item xs>
              <p style={myHeader}>
                 INTUITIVE
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Grid>              
         <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <br/>
          <p style={mystyle}>
             HOUSTON, TX
          </p>
          <p style={mystyle}>
             $45/HR
          </p>
        </Grid>     
             <Grid item xs={12} md={6} lg={3}>
                <br/><br/>
             <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', color: 'white', width: '70%',  fontSize:"15px"}}
              // sx={{ mt: 7, mb: 2 }}
              onClick={() => {history.push('/view-job');}}
            >
              PHARMACY
            </Button>
            </Grid>
             <Grid item xs={12} md={8} lg={8}>
             <br/><br/>
                <p>Resolves customer complaints by investigating problems, developing solutions, preparing memos/reports, and making recommendations to management. Develop strong, lasting and meaningful relationships with the GPO, 
                and other Healthcare contracted customers, and Reinhart Foodservice 
                divisions.
                Collaborate with Marketing to develop and execute marketing plans through/with
                end users and partners. Find, develop, manage and maintain healthcare client 
                relationships. Develop and execute sales presentations to potential and current 
                clients.
                </p>
            </Grid>
          </Grid>
        </Container>

      </Layout>
  );
}
