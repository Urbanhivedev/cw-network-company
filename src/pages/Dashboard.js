import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import Layout from "../components/Layout/layout";

export default function Dashboard() {
  const dispatch = useDispatch();


  return (
      <Layout>
       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <h1>Holla Amigo</h1>
        </Container>
      </Layout>
  );
}
