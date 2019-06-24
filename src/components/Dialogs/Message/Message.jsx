import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
      <div className={`${s.messagesBlock} ${props.me}`}>
        {props.message}
      </div>)
}

export default Message;
