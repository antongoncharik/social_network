import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {sendMessageCreator, updateTextMessageCreator} from './../../redux/dialogs_reducer';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog id={d.id} dialog={d.name}/>);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} me={m.me}/>);

  let refNewMessage = React.createRef();

  let sendMessage = () => {
    let textMessage = refNewMessage.current.value;
    let action = sendMessageCreator({id: 3, me: 'me', message: textMessage});
    props.dispatch(action);
  }

  let changeMessage = () => {
    let textMessage = refNewMessage.current.value;
    let action = updateTextMessageCreator(textMessage);
    props.dispatch(action);
  }

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
                  value={props.dialogsPage.currentTextMessage}></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    )
}

export default Dialogs;
