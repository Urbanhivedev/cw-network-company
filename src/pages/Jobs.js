import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, CircularProgress, Button, Typography} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core";
import JobList from "../components/Jobs/job-list";

const theme = createTheme();



export default function Jobs() {
  return (
      <Layout title={"JOBS"}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <JobList />
        </Container>
      </Layout>
  );
}
