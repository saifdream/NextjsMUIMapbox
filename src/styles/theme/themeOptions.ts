import { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,

          scrollbarWidth: 'thin',
          scrollbarColor: '#B7B7B7 transparent',
          '&::-webkit-scrollbar': {
            width: 6,
            height: 6,
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 6,
            backgroundColor: '#B7B7B7',
            minHeight: 24,
            minWidth: 24,
          },
          '&::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#adadad',
          },
          '&::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#adadad',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#adadad',
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent',
          },
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }
      }
    }
  },
  palette: {
    mode: 'light',
  },
};

export default themeOptions;