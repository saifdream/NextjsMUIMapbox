import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

export default function Fields() {
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
        </>
    )
}