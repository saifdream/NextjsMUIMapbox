// import styles from '@/styles/Home.module.css';
import { Box, Container, Divider, IconButton, Stack, Typography } from "@mui/material";
import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/component/Header';
import Map from '@/component/Map';
import Service from '@/component/Service';
import Grid from '@mui/material/Unstable_Grid2';
import { grey, teal } from '@mui/material/colors';
import { OpenInFull } from '@mui/icons-material';

const sections = [
  { title: 'Field', url: '#' },
  { title: 'Water Management', url: '#' },
  { title: 'AnalyZe', url: '#' },
];

const fields = [
  { label: 'Field Monitor' },
  { label: 'Field Insight' },
  { label: 'Field Notes' },
  { label: 'Share Status' },
];

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Next MUI | Map Box</title>
        <meta name="description" content="Map Box implementation using typescript, next js, material ui, and react js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header sections={sections} title="Global Serach"/>
        <Box component="main">
          <Map data={props.geoData}/>
          <Service/>

          <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2}>
              <Grid xs={4}>
                <Box 
                  sx={{
                    height: 30, 
                    bgcolor: grey[300], 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                  }}
                >
                  <Typography fontWeight={600} fontSize={15}>My Fields</Typography>
                </Box>

                <Box 
                  sx={{
                    height: 180, 
                    minHeight: 180, 
                    bgcolor: grey[300], 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    mt: 1
                  }}
                >
                  <Typography fontWeight={500}>Fields Dropdown View</Typography>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box 
                  sx={{
                    height: 30, 
                    bgcolor: grey[300], 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                  }}
                >
                  <Typography fontWeight={600} fontSize={15}>Field Data</Typography>
                </Box>

                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    height: 180, 
                    minHeight: 180, 
                    bgcolor: teal[50], 
                    p: 1,
                    mt: 1
                  }}
                >
                  <Stack direction="column" spacing={1} sx={{width: '49%'}}>
                    <Typography fontWeight={500} fontSize={14}>Drainage Classification</Typography>
                    <Typography fontSize={14}>Soil</Typography>
                    <Typography fontSize={14}>Tile</Typography>
                    <Typography fontSize={14}>Yield</Typography>
                    <Typography fontSize={14}>Wetlands</Typography>
                  </Stack>
                  <Divider orientation='vertical' sx={{mx: 1, border: '1px solid #d3d3d3'}}/>
                  <Stack direction="column" spacing={1} sx={{width: '49%'}}>
                    <Typography fontSize={14}>Weather</Typography>
                    <Typography fontSize={14}>Crop history</Typography>
                    <Typography fontSize={14}>Hail history</Typography>
                    <Typography fontSize={14}>NDVI</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid xs={5} position="relative">
                <Stack direction="row" justifyContent="space-between">
                  {fields.map(field => (
                    <Box 
                      key={field.label}
                        sx={{
                          height: 30, 
                          bgcolor: grey[300], 
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center',
                          px: 1
                        }}
                      >
                      <Typography fontWeight={600} fontSize={15}>{field.label}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Box
                  sx={{
                    mt: 1,
                    height: 180, 
                    minHeight: 180, 
                    bgcolor: grey[700],
                    overflow: 'auto',
                  }}
                >
                  <Box minHeight={200} display="flex" justifyContent="center" alignItems="center">
                    <Typography color="#FFF" textAlign="center">
                      DATA, Graph & Table
                    </Typography>
                  </Box>
                </Box>
                <IconButton sx={{ position: "absolute", bottom: 15, right: 35, zIndex: 2000 }}>
                  <OpenInFull fontSize='small' sx={{color: '#FFF'}}/>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson')
  const geoData = await res.json()
  return { geoData }
}

export default Home;