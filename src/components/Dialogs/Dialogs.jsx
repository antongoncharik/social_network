import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let refNewMessage = React.createRef();
  let dialogsElements = props.dialogs.map(d => <Dialog id={d.id} dialog={d.name}/>);
  let messagesElements = props.messages.map(m => <Message message={m.message} me={m.me}/>);
  let sendMessage = () => props.sendMessage(refNewMessage.current.value);
  let changeMessage = () => props.changeMessage(refNewMessage.current.value);

  return (
    <div className={s.dialogsMessagesBlock}>
      <div className={s.dialogsBlock}>
        {dialogsElements}
      </div>
      <div className={s.messagesBlock}>
          {messagesElements}
      </div>
      <div>
        <textarea ref={refNewMessage} onChange={changeMessage}
          value={props.currentTextMessage}></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    )
}

export default Dialogs;
