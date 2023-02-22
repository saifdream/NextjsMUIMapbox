import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import CustomButton from './CustomButton';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ padding: '0 !important' }}>
        <CustomButton>Logo</CustomButton>
        <Box 
            sx={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center' 
            }}
        >
            <Typography
                color="inherit"
                align="center"
                sx={{
                    ml: {
                        md: 15
                    }, 
                    width: 350, 
                    bgcolor: grey[700], 
                    color: '#FFF', 
                    p: 1
                }}
                noWrap
            >
            {title}
            </Typography>
        </Box>
        
        <CustomButton sx={{mr: 1}}>Notifications</CustomButton>
        <CustomButton>Profile</CustomButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ 
            justifyContent: 'center', 
            overflowX: 'auto', 
            bgcolor: grey[300] 
        }}
      >
        {sections.map((section) => (
            <NextLink
                key={section.title}
                href={section.url} 
                passHref 
                style={{
                    textDecoration: 'none'
                }}
            >
                <Typography 
                    sx={{ 
                        p: 1, 
                        flexShrink: 0, 
                        fontWeight: 600, 
                        color: '#000' 
                    }}
                >
                    {section.title}
                </Typography>
            </NextLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}