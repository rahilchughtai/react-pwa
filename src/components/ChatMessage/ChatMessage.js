import './ChatMessage.css'

import { MdModeEditOutline } from 'react-icons/md'
import Tooltip from '@mui/material/Tooltip';
import { auth } from '../../firebase'
import { useState } from 'react'

export const ChatMessage = (props) => {
    const { text, photoURL, uid } = props.msgData
    const msgFromCurrUser = (uid === auth.currentUser.uid)
    const getMessageClass = msgFromCurrUser ? 'sent' : 'received'
    const [editVisible, seteditVisible] = useState(false)
    const msgEditable = editVisible && msgFromCurrUser


    return (

        <div onMouseLeave={() => seteditVisible(false)} onMouseEnter={() => seteditVisible(true)} className={`Message ${getMessageClass}`}>
            <Tooltip title={auth.currentUser.displayName}>
                <img alt="profile" src={photoURL || 'https://picsum.photos/900/900'} />
            </Tooltip>

            <p>
                {text}
            </p>
            {msgEditable && <MdModeEditOutline className="edit-icon" />}
        </div>

    )
}
