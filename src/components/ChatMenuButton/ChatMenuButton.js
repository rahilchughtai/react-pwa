import './ChatMenuButton.css'

import { IoCameraSharp, IoLocationSharp, IoMicSharp } from 'react-icons/io5'
import useMenu, { DarkTheme, GOOGLE_API_KEY } from '../../utils/utils.js'

import { BiDotsVerticalRounded } from 'react-icons/bi'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useRef } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { useGeolocation } from 'react-use';

export const ChatMenuButton = (props) => {
    const { anchorEl, menuOpen, handleMenuClick, handleMenuClose } = useMenu()
    const location = useGeolocation();
    const theme = DarkTheme;

    const imageInput = useRef();

    const locationToAddress = async () => {
        const { latitude: lat, longitude: long } = location
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`)
        const resjson = await res.json()
        const resp = resjson.results[0].formatted_address
        return `My Location: ${resp}`
    }

    const handleLocationButton = () => {
        handleMenuClose()
        locationToAddress().then(
            data => {
                props.setFormValue((value) => value + data)
            }
        )
    }

    const sendImage = async () => {
        handleMenuClose();

        if (!imageInput.current.files || !imageInput.current.files.length)
            return;

        const image = imageInput.current.files[0];

        if (image.size > 1000000) {
            console.log("File is too big for the firestore!");
            return;
        }

        const fileReader = new FileReader();

        fileReader.readAsDataURL(image);

        fileReader.onload = () => {
            if (!fileReader.result.startsWith("data:image"))
                return;

            props.sendCustomValue(fileReader.result);
        };
    };

    return (
        <>
            <button type="button"
                className="btn-menu"
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={menuOpen ? 'true' : undefined}
                onClick={handleMenuClick}
            >
                <span>
                    <BiDotsVerticalRounded />
                </span>
            </button>

            <ThemeProvider theme={theme}>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>

                    <MenuItem className="menu-item" onClick={handleLocationButton}> Send Location <IoLocationSharp /></MenuItem>
                    
                    <MenuItem component="label" className="menu-item">
                        Send Image  <IoCameraSharp />
                        <input
                            ref={imageInput}
                            style={{ visibility: "hidden" }}
                            onChange={sendImage}
                            type="file"
                            accept="image/x-png,image/jpeg,image/gif" />
                    </MenuItem>

                    <MenuItem disabled className="menu-item"> Send Voice Message  <IoMicSharp /></MenuItem>
                </Menu>
            </ThemeProvider>
        </>
    )
}
