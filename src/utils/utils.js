import React from "react";
import { createTheme } from '@mui/material/styles';

//react mui menu hook
export default function useMenu(resetInterval = null) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl)
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    return { anchorEl, menuOpen, handleMenuClose, handleMenuClick };
}

export function useModal(reset = false) {
    const [modalOpen, setModalOpen] = React.useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        maxWidth:400,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return { modalOpen, handleModalOpen, handleModalClose, modalStyle }
}


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
})

export const GOOGLE_API_KEY = ""
