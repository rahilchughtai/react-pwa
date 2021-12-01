import './ChatRoom.css'

import React, { useEffect, useRef, useState } from 'react'
import { addDoc, collection, orderBy, query, serverTimestamp } from '@firebase/firestore'

import { usePageVisibility } from 'react-page-visibility';

import { ChatMenuButton } from '../ChatMenuButton/ChatMenuButton'
import { ChatMessage } from '../ChatMessage/ChatMessage'
import { FireDb } from '../../firebase'
import { IoSendSharp } from 'react-icons/io5'
import { auth } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const ChatRoom = () => {
    let messagesReference = collection(FireDb, 'messages');
    let msgQuery = query(messagesReference, orderBy('createdAt', 'asc'));
    const [messages] = useCollectionData(msgQuery, { idField: 'id' });
    const [oldMessagesLength, setOldMessagesLength] = useState(0);
    const [formValue, setFormValue] = useState('');
    const emptyElem = useRef();

    const isPageVisible = usePageVisibility();

    useEffect(
        () => {
            if (Notification.permission !== "granted")
                return;

            if (!messages)
                return;

            if (!isPageVisible && !!oldMessagesLength && oldMessagesLength !== messages.length)
            {
                const newMessages = messages
                    .slice(oldMessagesLength)
                    .filter(x => x.uid !== auth.currentUser.uid);

                for (const newMessage of newMessages) {
                    new Notification(newMessage.displayName, { icon: newMessage.photoURL, body: newMessage.text });
                }                
            }

            setOldMessagesLength(messages.length);
        },
        [messages]
    );

    const sendUserMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL, displayName } = auth.currentUser;
        const messageObj = {
            text: formValue,
            createdAt: serverTimestamp(),
            displayName,
            uid,
            photoURL
        }
        await addDoc(messagesReference, messageObj)
        setFormValue('')
        emptyElem.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="ChatRoom">
            <main>
                {messages && messages
                        .slice(Math.max(messages.length - 20, 0))
                        .map(msg => <ChatMessage key={msg.id} msgData={msg} />)}
                <span ref={emptyElem}></span>
            </main>
            <form >
                <ChatMenuButton setFormValue={formValue => { setFormValue(formValue) }} className="ChatMenu" />
                <input maxLength="100" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message..." />
                <button className="send-button" onClick={sendUserMessage} disabled={formValue === ''} type="submit">
                    <span>
                        <IoSendSharp />
                    </span>
                </button>
            </form>
        </div>
    )
}
