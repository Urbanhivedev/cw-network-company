import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, CircularProgress, Button, Typography} from '@mui/material';
import Layout from "../components/Layout/layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CandidatesApplied from "../components/Jobs/candidates-applied";
import { getCandidates } from "../redux/actions/candidate.action";
import { useHistory } from "react-router-dom";
import { getSingleJobApplied } from "../redux/actions/job.action";
import {Skeleton} from '@mui/material';

const theme = createTheme();



export default function CCandidatesApplied() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { jobsApplied } = useSelector((state) => state.jobs);
  const [jobsAppliedArr, setjobAppliedArr] = useState(jobsApplied);
  useEffect(() => {
   dispatch(getSingleJobApplied());  
   setjobAppliedArr(jobsApplied);
  }, [])

  return (
      <Layout title={"CANDIDATES APPLIED"}>
        {jobsAppliedArr?.applied?.length ?
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <CandidatesApplied jobsAppliedArr={jobsAppliedArr?.applied}/>
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
