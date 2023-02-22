import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function StateDetails({hoverInfo}: any) {
    if(!hoverInfo) return null;
    return (
        <Box
            component="div"
            sx={{
                position: 'absolute',
                margin: 2,
                padding: 1,
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                maxWidth: 300,
                fontSize: 10,
                zIndex: 9,
                pointerEvents: 'none',
                left: hoverInfo.x, 
                top: hoverInfo.y
            }}
        >
            <Stack>
                <Typography variant="subtitle1" fontSize={11}>
                    <strong>State:</strong> {hoverInfo.feature.properties.name}
                </Typography>
                <Typography variant="subtitle1" fontSize={11}>
                    <strong>Region:</strong> {hoverInfo.feature.properties.region}
                </Typography>
                <Typography variant="subtitle1" fontSize={11}>
                    <strong>Region Big:</strong> {hoverInfo.feature.properties.region_big}
                </Typography>
                <Typography variant="subtitle1" fontSize={11}>
                    <strong>Local Code:</strong> {hoverInfo.feature.properties.code_local}
                </Typography>
                <Typography variant="subtitle1" fontSize={11}>
                    <strong>Postal Code:</strong> {hoverInfo.feature.properties.postal}
                </Typography>
            </Stack>
        </Box>
    )
}