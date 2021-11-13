import React from 'react'

export const ChatMessage = (props) => {
    const { msgText } = props
    return (
        <div>
            <p>
                {msgText}
            </p>
        </div>
    )
}
