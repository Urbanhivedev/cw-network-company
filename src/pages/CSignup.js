import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Card, CardActions, CardContent, CircularProgress, Button, Typography, Divider, Chip} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MDliaison from '../assets/images/logo.png';
import { uploadImage } from "../redux/actions/auth.action";


const theme = createTheme();

export default function CSignup() {
   const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [industry, setIndustry] = useState('');
    const [password, setPassword] = useState('');
    const [selectedFile, setSelectedFile] = useState({selectedFile: [], selectedFileName: []});

    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const { error } = useSelector((state) => state.auth);

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

  const userSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {name, email, phone, industry, password};
    dispatch(uploadImage(user, selectedFile.selectedFile, history, setLoading))
     
  }

  const handleselectedFile = event => {
    setSelectedFile({
        selectedFile: event.target.files[0],
        selectedFileName: event.target.files[0].name
    });
};

  return (
    //   <Layout>
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{border: '0px solid red' }}>
        <div style={{marginLeft: '20%'}}>
        <CssBaseline /><br/><br/>
       
        <div style={{marginLeft: '30%',marginBottom: '7%' }}>
        <img src={MDliaison} alt=""  style={{borderRadius:"5%"}}/>
        </div>
       
       
        <div style={{marginLeft: '10%'}}>
        
        <p style={header}>COMPANY REGISTRATION</p>
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
          {error && 
            <>
             <p style={{color: 'red'}}>{error}</p>
           <br/>
            </>
           }
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
                  value={name}    
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <br/><br/><br/>
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>EMAIL:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="email"
                  style={{border: '1px solid black', width: 380, height: 45, padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={email}    
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>PASSWORD:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="password"
                  style={{border: '1px solid black', width: 380, height: 45, padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={password}    
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>PHONE:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="number"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={phone}    
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={industry}    
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>LOGO:</p>
              </Grid>
              <Grid item xs={12} sm={6} style={{border: '0px solid red'}}>
              <center>
              <Button
              // fullWidth
              variant="contained"
              component="label"
              style={{backgroundColor: 'black', height:"40px", width: '40%',  fontSize:"15px"}}
            //   sx={{ mt: 3, mb: 2 }}
            >
              UPLOAD
              <input
              type="file"
              style={{ display: 'none' }}
              // hidden
              required
              onChange={handleselectedFile}
              />
            </Button>
            <p>{selectedFile?.selectedFileName}</p>

              </center>
              </Grid>

            </Grid>
            {/* {isLoading ? <center><CircularProgress color="secondary" /></center> :  */}
                <br/>
            <Divider style={{color: 'black'}}>
              <Chip label="......" />
            </Divider>
            <center>
            <Grid item xs={10} sm={2.5} sx={{mr: 5}} style={{border: '0px solid red'}}>
             <Button
              type="submit"
              disabled={loading}
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', color: 'white', height:"40px", width: '30%',  fontSize:"15px"}}
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => {
                
              // }}
            >
              {loading ? "Loading..." : "SUBMIT"}
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
