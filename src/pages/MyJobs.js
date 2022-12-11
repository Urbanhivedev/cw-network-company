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
} from "@mui/material";
import Layout from "../components/Layout/layout";
import { useHistory } from "react-router-dom";
import RectangleIMG from "../assets/images/Rectangle.png";
import PopupModal from "../components/Layout/modal";

export default function MyJobs() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const mystyle = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 200,
    fontSize: "18px",
    lineHeight: "30px",
    color: "black",
  };

  const myJobsArr = [
    {id: 1, title: 'MERN STACK'},
    {id: 2, title: 'MERN STACK'},
    {id: 3, title: 'MERN STACK'},
  ];

  return (
    <Layout title={"MY JOBS"}>
      <PopupModal open={open} setOpen={setOpen} />
      <Container
        maxWidth="lg"
        sx={{ mt: 4, mb: 4 }}
        style={{ border: "0px solid red" }}
      >
        <Grid container spacing={2}>
          {myJobsArr.map(job => {
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
                  <ButtonBase sx={{ width: 128, height: 178, pb: 8 }}>
                    <img alt="Job-Logo" src={RectangleIMG} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <br />
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        style={mystyle}
                      >
                        INTUITIVE
                      </Typography>
                      <Typography variant="body2" gutterBottom style={mystyle}>
                        HOUSTON, TX
                      </Typography>
                      <hr />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={mystyle}
                      >
                        <b>
                          ACTIVE <span style={{ color: "green" }}>•</span>
                        </b>
                      </Typography>
                    </Grid>
                    <hr />
                    <Grid item>
                      <Button
                        type="submit"
                        // fullWidth
                        variant="contained"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          width: "70%",
                          fontSize: "15px",
                        }}
                        onClick={() => setOpen(true)}
                      >
                        CLOCK IN
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        );
          })}


        </Grid>
      </Container>
    </Layout>
  );
}
