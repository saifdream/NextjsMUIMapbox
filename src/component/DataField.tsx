import Box from "@mui/material/Box";
import { grey, teal } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function DataField() {
    return (
        <>
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
        </>
    )
}