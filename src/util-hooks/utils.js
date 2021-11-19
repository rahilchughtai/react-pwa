import React from "react";
import { createTheme } from '@mui/material/styles';

export default function useMenu(resetInterval = null) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return { anchorEl, open, handleClose, handleClick };
}


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
})

export const GOOGLE_API_KEY = "AIzaSyD5n-f3RcSs0LFdqmvCVew49019Lt2c0m8"





