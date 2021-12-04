import useMenu, { DarkTheme, useModal } from "../../utils/utils";

import { AiFillPicture } from 'react-icons/ai'
import Box from '@mui/material/Box';
import { BtnMin } from '../../styledComponents/btnStyles'
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { auth } from "../../firebase";
import { updateProfile } from "@firebase/auth";
import { useState } from 'react'

export const AppProfileIcon = () => {
    const { anchorEl, menuOpen, handleMenuClick, handleMenuClose } = useMenu()
    const { modalOpen, handleModalOpen, handleModalClose, modalStyle } = useModal()
    const [displayName, setdisplayName] = useState('')
    const theme = DarkTheme

    const handleNameClick = () => {
        handleModalOpen()
        handleMenuClose()
    }

    const updateUsername = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).catch(error => {
            console.log(error)
        })
    }

    const handleModalButtonClick = () => {
        if (!displayName.trim().length) return
        updateUsername(displayName)
        handleModalClose()
    }

    return (
        <div>
            <BtnMin
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={menuOpen ? 'true' : undefined}
                onClick={handleMenuClick}
                style={{
                    position: 'absolute',
                    left: '20px',
                    top: '20px'
                }} icon={+true} >
                <span icon={+true}>
                    <FiUser size={20} />
                </span>
            </BtnMin>


            <ThemeProvider theme={theme}>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className="menu-item" onClick={handleNameClick}> Change Display name <MdDriveFileRenameOutline /> </MenuItem>
                </Menu>
            </ThemeProvider>

            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Change your display name
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input minLength={1} onChange={(e) => setdisplayName(e.target.value)} value={displayName} ></input>
                    </Typography>
                    <Button onClick={handleModalButtonClick}> Confirm</Button>
                </Box>
            </Modal>
        </div>
    )
}
