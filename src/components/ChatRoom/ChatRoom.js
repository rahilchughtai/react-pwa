import React, { useState, useRef, useEffect } from 'react'
import { collection, query, addDoc, orderBy, limit, serverTimestamp } from '@firebase/firestore'
import { FireDb } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ChatMessage } from '../ChatMessage/ChatMessage'
import { auth } from '../../firebase'
import './ChatRoom.css'
import { IoSendSharp } from 'react-icons/io5'
import { IoCamera } from 'react-icons/io5'

import { ChatMenuButton } from '../ChatMenuButton/ChatMenuButton'


export const ChatRoom = () => {
    let messagesReference = collection(FireDb, 'messages')
    let msgQuery = query(messagesReference, orderBy('createdAt', 'desc'), limit(20))
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
        <div className="ChatRoom">
            <main>
                {messages && messages.slice(0).reverse().map(msg => <ChatMessage
                    key={msg.id}
                    msgData={msg}
                />)}
                <span ref={emptyElem}></span>
            </main>
            <form >

                <ChatMenuButton className="ChatMenu" />

                <input maxLength="100" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message..." />

                <button className="send-button" onClick={sendUserMessage} disabled={formValue === ''} type="submit">
                    <span>
                        <IoSendSharp />
                    </span>
                </button>


                {/*

                <button className="cameraUpload" htmlFor={'upload-button'}>
                    <span>
                        <IoCamera />
                    </span>
                </button>

                <input style={{ display: 'none' }} id="upload-button" className="camera" accept="image/*" type="file" capture="environment" />
*/}
            </form>
        </div>
    )
}
