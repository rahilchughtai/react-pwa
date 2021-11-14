import React from 'react'
import './AppHeader.css'
import dhbwLogo from '../../assets/dhbwCoolersvg.svg'
import { auth } from '../../firebase'
import { Button, BtnSpan } from '../../styledComponents/btnStyles'
import { RiLogoutBoxFill } from 'react-icons/ri'
export const AppHeader = (props) => {

    const { userSignedIn } = props

    return (
        <header className="App-header">
            <img src={dhbwLogo} className="App-logo" alt="logo" />
            <h1> DHBW Chat App </h1>
            {userSignedIn &&
                <Button icon onClick={() => auth.signOut()}>
                    <BtnSpan icon>
                        <RiLogoutBoxFill />
                    </BtnSpan>
                </Button>
            }
        </header>
    )
}

