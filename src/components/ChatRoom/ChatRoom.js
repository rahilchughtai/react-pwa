import React, { useState, useRef } from 'react'
import { collection, query, where, getDocs, addDoc, orderBy, limit, serverTimestamp } from '@firebase/firestore'
import { FireDb } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ChatMessage } from '../ChatMessage/ChatMessage'
import { auth } from '../../firebase'


export const ChatRoom = () => {
    const messagesReference = collection(FireDb, 'messages')
    const msgQuery = query(messagesReference, orderBy('createdAt'), limit(10))
    const [messages] = useCollectionData(msgQuery, { idField: 'id' })
    const [formValue, setFormValue] = useState('')
    const emptyElem = useRef()

    const sendUserMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        const messageObj = {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL
        }
        await addDoc(messagesReference, messageObj)
        setFormValue('')
        emptyElem.current.scrollIntoView({ behavior: 'smooth' })

    }

    return (
        <div>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} msgText={msg.text} />)}
                <span ref={emptyElem}></span>
            </main>

            <form onSubmit={sendUserMessage} >
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
