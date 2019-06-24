import React from 'react';
import s from './Message.css';

const Message = (props) => {
    return (
      <div className={`messageBlock ${props.me}`}>
        {props.message}
      </div>)
}

export default Message;
