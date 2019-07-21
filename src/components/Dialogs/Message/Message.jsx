import React from 'react';

const Message = (props) => {
    return (
        <div className={`messageBlock ${props.me}`}>
            {props.message}
        </div>)
}

export default Message;
