import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import CustomButton from '../utility/CustomButton';

export default function SectionMenu({section}:any) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event :any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <React.Fragment>
            <Tooltip title={section.title}>
            <CustomButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? `${section.title}-menu` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Typography 
                    sx={{ 
                        p: 1, 
                        flexShrink: 0, 
                        fontWeight: 600, 
                        color: '#000',
                    }}
                >
                    {section.title}
                </Typography>
            </CustomButton>
            </Tooltip>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                },
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {
                section.menus.map((menu:any) => (
                    <MenuItem key={menu.title} onClick={handleClose} sx={{fontSize: 14, fontWeight: 500}}>
                        {menu.title}
                    </MenuItem>
                ))
            }
        </Menu>
        </React.Fragment>
    );
}