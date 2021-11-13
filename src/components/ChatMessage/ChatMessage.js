import React from 'react'
import { auth } from '../../firebase'


export const ChatMessage = (props) => {
    const { createdAt, text, photoURL, uid } = props.msgData
    const getMessageClass = (uid === auth.currentUser.uid) ? 'sent' : 'received'

    return (
        <div className={`Message ${getMessageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>
                {text}
            </p>
        </div>
    )
}
