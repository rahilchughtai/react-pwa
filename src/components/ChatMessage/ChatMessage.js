import './ChatMessage.css'

import Tooltip from '@mui/material/Tooltip';
import { auth } from '../../firebase'

export const ChatMessage = (props) => {
    const { value, photoURL, uid, displayName } = props.msgData
    const msgFromCurrUser = (uid === auth.currentUser.uid)
    const getMessageClass = msgFromCurrUser ? 'sent' : 'received'

    return (

        <div onMouseLeave={() => seteditVisible(false)} onMouseEnter={() => seteditVisible(true)} className={`Message ${getMessageClass}`}>
            <Tooltip title={displayName}>
                <img alt="profile" src={photoURL || 'https://picsum.photos/900/900'} />
            </Tooltip>

            {!value.startsWith("data:image")
                ? <p>{value}</p>
                : <img style={{ width: '50%', height: '90%', borderRadius: 20 }} src={value} />}

        </div>

    )
}
