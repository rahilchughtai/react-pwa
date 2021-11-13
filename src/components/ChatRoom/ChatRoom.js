import React from 'react'
import { collection, query, where, getDocs, orderBy, limit } from '@firebase/firestore'
import { FireDb } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ChatMessage } from '../ChatMessage/ChatMessage'

export const ChatRoom = () => {
    const messagesReference = collection(FireDb, 'messages')
    const msgQuery = query(messagesReference, orderBy('createdAt'), limit(10))
    const [messages] = useCollectionData(msgQuery, { idField: 'id' })


    return (
        <div>
            <h2>  Welcome to the Chat Room!</h2>
            {messages && messages.map(msg => <ChatMessage key={msg.id} msgText={msg.text} />)}
        </div>
    )
}
