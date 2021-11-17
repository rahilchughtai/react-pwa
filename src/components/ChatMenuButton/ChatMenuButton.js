import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoSendSharp } from 'react-icons/io5'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import './ChatMenuButton.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiFillCamera } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
import { useGeolocation } from 'react-use';

export const ChatMenuButton = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const location = useGeolocation();
    const open = Boolean(anchorEl)
    const GOOGLE_API_KEY = "AIzaSyD5n-f3RcSs0LFdqmvCVew49019Lt2c0m8"

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const locationToAddress = async () => {
        const { latitude: lat, longitude: long } = location
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`)
        const resjson = await res.json()
        const resp = resjson.results[0].formatted_address
        return `My Location: ${resp}`
    }

    const handleClose = (key) => {
        setAnchorEl(null);
        if (key === 'location') {
            locationToAddress().then(
                data => {
                    props.setFormValue((value) => value + data)
                }
            )

        }


    };


    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    })


    return (
        <>
            <button type="button"
                className="btn-menu"
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
                    <MenuItem className="menu-item" onClick={handleClose}>Attach Image <AiFillCamera />   </MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleClose('location')}> Send Location <IoLocationSharp />  </MenuItem>

                </Menu>
            </ThemeProvider>

        </>
    )
}
