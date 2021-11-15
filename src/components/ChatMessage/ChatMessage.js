import { auth } from '../../firebase'
import './ChatMessage.css'


export const ChatMessage = (props) => {
    const { text, photoURL, uid } = props.msgData
    const getMessageClass = (uid === auth.currentUser.uid) ? 'sent' : 'received'

    return (
        <div className={`Message ${getMessageClass}`}>
            <img alt="profile" src={photoURL || 'https://picsum.photos/900/900'} />
            <p>
                {text}
            </p>
        </div>
    )
}
