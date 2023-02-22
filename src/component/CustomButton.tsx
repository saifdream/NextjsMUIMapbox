import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
    textTransform: 'capitalize',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: grey[400],
    },
}));

export default CustomButton;