import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import {
  Box,
  Grid,
  TextField,
  Paper,
  Button,
  Typography,
  ButtonBase,
  Avatar,
} from "@mui/material";
import Layout from "../components/Layout/layout";
import CssBaseline from "@mui/material/CssBaseline";
import { NavLink, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import JobLogo from "../assets/images/logo.png";
//import SearchBar from "material-ui-search-bar";
import RectangleIMG from "../assets/images/Rectangle.png";
import Star from "../assets/images/Star.png";
import { getSingleJobHired } from "../redux/actions/job.action";
import {Skeleton} from '@mui/material';

const theme = createTheme();

export default function CCandidatesHired() {
  const { jobsHired } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSingleJobHired());  
   }, [])

  const myHeader = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "37px",
    lineHeight: "30px",
    color: "black",
    marginLeft: "50px",
    marginTop: "10px",
  };
  const mystyle = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 200,
    fontSize: "18px",
    lineHeight: "30px",
    color: "black",
    // float: 'right'
  };

  const myJobsArr = [
    { id: 1, title: "MERN STACK" },
    { id: 2, title: "MERN STACK" },
    { id: 3, title: "MERN STACK" },
  ];

  return (
    <Layout title={"CANDIDATES HIRED"}>
      {jobsHired?.hired?.length ?
      <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
        <Grid container spacing={2}>
    
          {jobsHired.hired.map((job) => {
            return (
              <Grid item xs={12} md={8} lg={4}>
                <Paper
                  sx={{
                    border: "1px solid black",
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    // height: 240,
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item>
                      {/* <ButtonBase sx={{ width: 128, height: 178, pb: 8 }}> */}
                      {/* <img alt="Job-Logo" src={RectangleIMG} /> */}
                      <Avatar
                        alt="Remy Sharp"
                        src={RectangleIMG}
                        style={{ width: "80px", height: "80px" }}
                      />
                      {/* </ButtonBase> */}
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs style={{ border: "0px solid red" }}>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                            style={mystyle}
                          >
                            {job.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            gutterBottom
                            style={mystyle}
                          >
                            {job.rate}/HR
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={mystyle}
                          >
                           {job.location}
                          </Typography>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              style={{
                                backgroundColor: "black",
                                color: "white",
                                // width: "50%",
                                fontSize: "15px",
                                padding: '6px',
                              }}
                              // onClick={() => setOpen(true)}
                            >
                              PHARMACY
                            </Button>
                          </Grid>
                          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                          
                          <Grid item xs={6} md={6}>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              style={{
                                backgroundColor: "black",
                                color: "white",
                                fontSize: "15px",
                                padding: "6px",
                              }}
                              // onClick={() => setOpen(true)}
                            >
                              SURGRY
                            </Button>
                          </Grid>
                        </Grid>

                        <center>
                        <div style={{marginTop: '10px'}}>
                        <img src={Star} width="35px" height="30px"/>
                        <img src={Star} width="35px" height="30px"/>
                        <img src={Star} width="35px" height="30px"/>
                        <img src={Star} width="35px" height="30px"/>
                        <img src={Star} width="35px" height="30px"/>
                        </div>
                        </center>
                        <hr />
                        <center>
                        <Grid item>
                          <Button
                            type="submit"
                            // fullWidth
                            variant="contained"
                            style={{
                              backgroundColor: "black",
                              color: "white",
                              width: "40%",
                              fontSize: "15px",
                              padding: "5px",
                            }}
                            // onClick={() => setOpen(true)}
                          >
                            VIEW
                          </Button>
                        </Grid>
                        </center>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      :
      <center>
      <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    </center>
        }
    </Layout>
  );
}