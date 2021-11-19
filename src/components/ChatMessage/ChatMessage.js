import './ChatMessage.css'

import { IoCamera } from 'react-icons/io5'
import { MdModeEditOutline } from 'react-icons/md'
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
            <img alt="profile" src={photoURL || 'https://picsum.photos/900/900'} />
            <p>
                {text}
            </p>
            {msgEditable && <MdModeEditOutline className="edit-icon" />}
        </div>

    )
}
