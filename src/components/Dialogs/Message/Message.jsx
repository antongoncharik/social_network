import React from 'react';

const Message = ({me, message}) => {
    return (
        <div className={`messageBlock ${me}`}>
            {message}
        </div>)
}

export default Message;
