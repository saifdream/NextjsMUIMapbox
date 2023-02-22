import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import CustomButton from "./utility/CustomButton";
import Tooltip from "@mui/material/Tooltip";

export default function Service() {
  return (
    <Box 
      component="div" 
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        bgcolor: grey[700], 
        color: '#FFF', 
        mt: 3,
        px: 2
      }}
    >
      <Typography sx={{ p: 1, flexShrink: 0 }}>
        - Selected Field Information
      </Typography>
      <Tooltip title="Request Service">
        <CustomButton 
          sx={{
            height: 30,
            width: 200
          }}
        >
          Request Service
        </CustomButton>
      </Tooltip>
    </Box>
  )
}