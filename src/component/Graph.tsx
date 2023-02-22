import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { OpenInFull } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import CustomButton from "./utility/CustomButton";
import Tooltip from "@mui/material/Tooltip";

const fields = [
    { label: 'Field Monitor' },
    { label: 'Field Insight' },
    { label: 'Field Notes' },
    { label: 'Share Status' },
];

export default function Graph() {
  return (
    <>
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
                }}
            >
                <Tooltip title={field.label}>
                    <CustomButton 
                        sx={{
                            fontSize: 14, 
                            fontWeight: 600, 
                            height: 30, 
                            width: 115
                        }}
                    >
                        {field.label}
                    </CustomButton>
                </Tooltip>
            </Box>
            ))}
        </Stack>
        <Box
            sx={{
                mt: 1,
                height: 180,
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
    </>
  )
}