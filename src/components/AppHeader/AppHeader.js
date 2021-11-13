import React from 'react'
import './AppHeader.css'
import dhbwLogo from '../../assets/dhbwCoolersvg.svg'
import { auth } from '../../firebase'

export const AppHeader = (props) => {

    const { userSignedIn } = props

    return (
        <header className="App-header">
            <img src={dhbwLogo} className="App-logo" alt="logo" />
            <h1> DHBW Chat App </h1>
            {userSignedIn && <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>}
        </header>
    )
}

