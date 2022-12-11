import React from "react";
import Container from '@mui/material/Container';
import Layout from "../components/Layout/layout";
import AppliedJobsList from "../components/Jobs/applied-jobs-list";


export default function AppliedJobs() {
  return (
      <Layout title={'JOBS APPLIED'}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <AppliedJobsList />
        </Container>
      </Layout>
  );
}
