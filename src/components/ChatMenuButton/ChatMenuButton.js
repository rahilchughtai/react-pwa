import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoSendSharp } from 'react-icons/io5'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import './ChatMenuButton.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ChatMenuButton = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    })


    return (
        <>
            <button type="button"
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <span>
                    <BiDotsVerticalRounded />
                </span>
            </button>

            <ThemeProvider theme={theme}>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem className="menu-item" onClick={handleClose}>Attach image </MenuItem>
                    <MenuItem className="menu-item" onClick={handleClose}>Send Location </MenuItem>

                </Menu>
            </ThemeProvider>

        </>
    )
}
