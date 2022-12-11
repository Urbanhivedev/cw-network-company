import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Layout from "../components/Layout/layout";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, id, points, captain) {
  return { name, id, points, captain };
}

const rows = [
  createData('RHYTHM B', 498711, 80, 'SALLAH'),
  createData('CARLITO', 411577, 71, 'SON'),
  createData('UEFA STARS', 409221, 69, 'KANE'),
];

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      "& .MuiTableCell-root": {
        borderLeft: "2px solid black"
      }
    }
  });


export default function Home4() {
  const dispatch = useDispatch();
  const classes = useStyles(); 
  return (
      <Layout>


      <Container maxWidth="lg" sx={{ mt: 15, mb: 4 }}>
          {/* <Grid container spacing={3}> */}

         
        <TableContainer component={Paper}>
      <Table className={classes.table} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ border: '2px solid black'}}>
          <TableRow>
            <TableCell align="center" style={{fontSize: '17px' }}><b>TEAM NAME</b></TableCell>
            <TableCell align="center" style={{fontSize: '17px' }}><b>TEAM ID</b></TableCell>
            <TableCell align="center" style={{fontSize: '17px' }}><b>POINTS</b></TableCell>
            <TableCell align="center" style={{fontSize: '17px' }}><b>CAPTAIN</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ border: '2px solid black' }}
            //   sx={{ '&:last-child td, &:last-child th': { border: '2px solid black' } }}
            >
              <TableCell align="center" component="th" scope="row" style={{fontSize: '15px', color: 'black' }}>
                {row.name}
              </TableCell>
              <TableCell align="center" style={{fontSize: '15px', color: 'black' }}>{row.id}</TableCell>
              <TableCell align="center" style={{fontSize: '15px', color: 'black' }}>{row.points}</TableCell>
              <TableCell align="center" style={{fontSize: '15px', color: 'black' }}>{row.captain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: '80px', width: '100%' }}
            >

        <h4><b>CHAMPION: RHYTHM B</b></h4>

        </Grid>

        </Container>
    



      </Layout>
  );
}
