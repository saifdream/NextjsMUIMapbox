// import styles from '@/styles/Home.module.css';
import { Box, Container } from "@mui/material";
import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/component/Header';
import Map from '@/component/map/Map';
import Service from '@/component/Service';
import Grid from '@mui/material/Unstable_Grid2';
import Graph from "@/component/Graph";
import DataField from "@/component/DataField";
import Fields from "@/component/Fields";

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Next MUI | Map Box</title>
      </Head>
      <Container>
        <Header title="Global Serach"/>

        <Box component="main">
          <Map/>
          <Service/>
          <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2}>
              <Grid xs={4}>
                <Fields/>
              </Grid>
              <Grid xs={3}>
                <DataField/>
              </Grid>
              <Grid xs={5} position="relative">
                <Graph/>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Home;