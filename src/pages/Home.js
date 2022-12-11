import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, CircularProgress, Button, Typography} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeBox from "../components/Home/home-box";
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';


const theme = createTheme();

export default function Home() {
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
    history.push('/2');
  }

  return (
      <Layout title={'HOME'}>
         <Container maxWidth="md" sx={{ mt: 4, mb: 4 }} style={{border: '0px solid red'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <HomeBox type={'JOBS'} BoxIcon={WorkOutlineIcon} />
              </Paper>
            </Grid>

             <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <HomeBox type={'PROFILE'}  BoxIcon={AccountCircleIcon}/>
              </Paper>
            </Grid>
             <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <HomeBox type={'INBOX'}  BoxIcon={MoveToInboxIcon}/>
              </Paper>
            </Grid>
             <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <HomeBox type={'TRAINING'}  BoxIcon={ModelTrainingIcon}/>
              </Paper>
            </Grid>




             {/* <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <HomeBox />
              </Paper>
            </Grid> */}
             {/* <Grid item xs={12} md={5} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                  alignItems: 'center',
                }}
              >               
              <HomeBox />
                <FloatingActionButtons />
              </Paper>
            </Grid> */}
            {/* Action Btn End */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              </Paper>
            </Grid>
          </Grid>
          {/* <Copyright sx={{ pt: 4 }} /> */}
        </Container>

      </Layout>
  );
}
