import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Button, Typography, ButtonBase} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import JobLogo from '../assets/images/logo.png';
import { getSingleCandidate } from "../redux/actions/candidate.action";


const theme = createTheme();

export default function CViewCandidatesDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation(); 
    const { candidate } = useSelector((state) => state.candidate);


    useEffect(() => {
      dispatch(getSingleCandidate(location.state));  
     }, [])

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
                <br/>
          <p style={mystyle}>
          {candidate?.city ? candidate.city : "Lagos, Nigeria"}
          </p>
          <p style={mystyle}>
          {candidate?.rate ? candidate.rate : "0"}/HR
          </p>
        </Grid> 
       
             <Grid item xs={4} md={6} lg={3} style={{border: '0px solid red', height: '50%', marginTop: '14px'}}>
             <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            >
             <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                    //   width: "30%",
                      fontSize: "15px",
                    }}
                    sx={{ pt: 1, pb: 1 }}
                    // onClick={viewJobsFxn}
                  >
                    PHARMACY
                  </Button>
                  <br/>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                    //   width: "30%",
                      fontSize: "15px",
                    }}
                    sx={{ pt: 1, pb: 1 }}
                    // onClick={viewJobsFxn}
                  >
                    SURGERY
                  </Button>
            </Grid>
            </Grid>

        
<Grid item xs={12} md={8} lg={6} style={{height: '10%', marginTop: '30px'}}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            >
             <div>
             <p style={{color: 'black'}}><b>URGENT MEMORIAL CARE</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  01/2022 - PRESENT</p>
             <p style={{color: 'black'}}>Resolves customer complaints by investigating problems, 
                developing solutions, preparing memos/reports, and making 
                recommendations to management.
                </p>
             </div>
             <br/>
             <div>
             <p style={{color: 'black'}}><b>URGENT MEMORIAL CARE</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  01/2022 - PRESENT</p>
             <p style={{color: 'black'}}>Resolves customer complaints by investigating problems, 
                developing solutions, preparing memos/reports, and making 
                recommendations to management.
                </p>
             </div>
            </Grid>            
          </Grid>
            <Grid item xs={12} md={8} lg={2} style={{height: '10%'}}>
            </Grid>
             
           
          </Grid>

          <center>
                 <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      width: "10%",
                      fontSize: "15px",
                    }}
                    sx={{ mt: 7, mb: 2}}
                    // onClick={viewJobsFxn}
                  >
                    RESUME
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      width: "10%",
                      fontSize: "15px",
                    }}
                    sx={{ mt: 7, mb: 2 }}
                    // onClick={viewJobsFxn}
                  >
                    HIRE
                  </Button>
          </center>

                  
        </Container>

      </Layout>
  );
}
