import useMenu, { DarkTheme } from "../../utils/utils";

import { BtnMin } from '../../styledComponents/btnStyles'
import { FiUser } from 'react-icons/fi'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';

export const AppProfileIcon = () => {
    const { anchorEl, open, handleClick, handleClose } = useMenu()
    const theme = DarkTheme

    return (
        <div>
            <BtnMin
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{
                    position: 'absolute',
                    left: '20px',
                    top: '20px'
                }} icon={true} >
                <span icon={true}>
                    <FiUser size={20} />
                </span>
            </BtnMin>


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
                    <MenuItem className="menu-item" onClick={handleClose}> Change Profile Picture </MenuItem>
                    <MenuItem className="menu-item" onClick={handleClose}> Change Display name </MenuItem>
                </Menu>
            </ThemeProvider>
        </div>
    )
}
