import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import CustomButton from './utility/CustomButton';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import SectionMenu from './section-menu/Menu';

const GlobalSearch = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    textAlign: 'center',
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? grey[700] : '#2b2b2b',
    color: '#FFF',
    border: '1px solid #ced4da',
    fontSize: 14,
    width: 350,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#FFF'
    }
  },
}));

const sections = [
  { 
    title: 'Field', 
    menus: [
      { title: 'Add' },
      { title: 'Edit' },
      { title: 'Import' },
  ]
  },
  { 
    title: 'Water Management', 
    menus: [
      { title: 'Pump' },
      { title: 'TDI' },
      { title: 'Title Maps' },
      { title: 'Assessment' },
    ]
  },
  { 
    title: 'AnalyZe', 
    menus: [
      { title: 'Yield' },
      { title: 'Soils' },
      { title: 'Plant Dates' },
    ]
  },
];

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

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
          <FormControl variant="standard">
            <GlobalSearch 
              // defaultValue="Global Search" 
              id="global-search"
              placeholder="Global Search" 
              sx={{
                ml: {
                  md: 15
                },
                textAlign: 'center'
              }} 
            />
          </FormControl>
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
          <SectionMenu 
            key={section.title} 
            section={section}
          />
        ))}
      </Toolbar>
    </React.Fragment>
  );
}