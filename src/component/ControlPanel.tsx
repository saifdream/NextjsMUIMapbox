import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

function ControlPanel() {
  return (
    <Box
        sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            maxWidth: '320px',
            background: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            padding: '12px 24px',
            margin: 1,
            color: '#6b6b76',
            outline: 'none',
        }}
    >
        <Typography variant='h6' component="h3" gutterBottom>Interactive GeoJSON</Typography>
        <Typography variant='body1' component="p" fontSize={12} gutterBottom>
            Map showing states provinces information. Hover over a state to see details.
        </Typography>
        <Typography variant='body1' component="p" fontSize={14} gutterBottom>
            Data source: <a href="https://d2ad6b4ur7yvpq.cloudfront.net" target="_blank" rel="noreferrer">Cloud Front Natural Earth</a>
        </Typography>
    </Box>
  );
}

export default React.memo(ControlPanel);