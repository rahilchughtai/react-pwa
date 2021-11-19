import './ChatMenuButton.css'

import useMenu, { DarkTheme, GOOGLE_API_KEY } from '../../utils/utils.js'

import { BiDotsVerticalRounded } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { useGeolocation } from 'react-use';

export const ChatMenuButton = (props) => {
    const { anchorEl, open, handleClick, handleClose } = useMenu()
    const location = useGeolocation();
    const theme = DarkTheme


    const locationToAddress = async () => {
        const { latitude: lat, longitude: long } = location
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`)
        const resjson = await res.json()
        const resp = resjson.results[0].formatted_address
        return `My Location: ${resp}`
    }

    const handleLocationButton = () => {
        handleClose()
        locationToAddress().then(
            data => {
                props.setFormValue((value) => value + data)
            }
        )
    }

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
                    <MenuItem className="menu-item" onClick={handleLocationButton}> Send Location <IoLocationSharp />  </MenuItem>
                </Menu>
            </ThemeProvider>
        </>
    )
}
