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
import { getSingleJob, updateJob } from "../redux/actions/job.action";
import Skeleton from '@mui/material/Skeleton';


const theme = createTheme();



export default function CUpdateJob() {
    const dispatch = useDispatch();
    const history = useHistory();
    const locationV = useLocation();
    const { job } = useSelector((state) => state.jobs);
    const [loading, setLoading] = useState(false);

    const initialState = {
        title: job ? job.title : "",
        description: job ? job.description : "",
        location: job ? job.location : "",
        rate: job ? job.rate : ""
      };

    const [
        { title, description, location, rate },
        setState
      ] = useState(initialState);
  
      const clearState = () => {
        setState({ ...initialState });
      };
  
      const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
      };


    useEffect(() => {
      dispatch(getSingleJob(locationV.state));  
      console.log("JOB: ", job);
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

    const updateJobFxn = (e) => {
        e.preventDefault();
        setLoading(true);
        const id  = locationV.state
        const job = {id, title, description, location, rate};
        console.log('JOB: ', job);
        dispatch(updateJob(job, setLoading, clearState, history));
    }

  return (
      <Layout>
         <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
          {job != undefined && job != null ?
          
          <>
          <form component="form" onSubmit={updateJobFxn}>
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
             <Grid item xs={4} md={6} lg={3} style={{border: '0px solid red', height: '50%', marginTop: '14px'}}>
             <h4>TITLE</h4>
            </Grid>
             <Grid item xs={12} md={8} lg={6} style={{height: '40%'}}>
             <TextField fullWidth
              label="Enter Job Title"
               id="fullWidth"
               required
               value={title}
               name="title"
               onChange={onChange}
               error={title === ""}
               />
            </Grid>
            <Grid item xs={12} md={8} lg={2} style={{height: '40%'}}>
              
            </Grid>
            <Grid item xs={4} md={6} lg={3} style={{border: '0px solid red', height: '50%', marginTop: '14px'}}>
             <h4>DESCRIPTION</h4>
            </Grid>
             <Grid item xs={12} md={8} lg={6} style={{height: '40%'}}>
             <TextField fullWidth
              label="Enter Job Description"
              id="fullWidth" 
              required
              multiline
              rows={6}
              maxRows={12}
              value={description}
              name="description"
              onChange={onChange}
              error={description === ""}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={2} style={{height: '40%'}}>
            </Grid>
            <Grid item xs={4} md={6} lg={3} style={{border: '0px solid red', height: '50%', marginTop: '14px'}}>
             <h4>LOCATION</h4>
            </Grid>
             <Grid item xs={12} md={8} lg={6} style={{height: '40%'}}>
             <TextField 
             fullWidth 
             label="Enter Job Location"
             required
             id="fullWidth"
             value={location}
             name="location"
             onChange={onChange}
             error={location === ""}
             />
            </Grid>
            <Grid item xs={12} md={8} lg={2} style={{height: '40%'}}>   
            </Grid>

            <Grid item xs={4} md={6} lg={3} style={{border: '0px solid red', height: '50%', marginTop: '14px'}}>
             <h4>RATE</h4>
            </Grid>
             <Grid item xs={12} md={8} lg={6} style={{height: '40%'}}>
             <TextField 
             fullWidth 
             required
             label="Enter Job Rate" 
             id="fullWidth"
             value={rate}
             name="rate"
             onChange={onChange}
             error={rate === ""}
             />
            </Grid>
            <Grid item xs={12} md={8} lg={2} style={{height: '40%'}}>
              
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
                    //   width: "30%",
                      fontSize: "15px",
                    }}
                    sx={{ mt: 7, mb: 2 }}
                    // onClick={addJobFxn}
                  >
                   {loading ? "Loading..." : "UPDATE"}
                  </Button>
          </center>

        </form>
          </>
          : 
          <center>
            <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
          </center>
}

                  
        </Container>

      </Layout>
  );
}
