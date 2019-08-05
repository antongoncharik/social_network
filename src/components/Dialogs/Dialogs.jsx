import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../Validators/validators";

const maxLength300 = maxLengthCreator(300);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newTextDialog'}
                       component={'input'}
                       validate={[required, maxLength300]}></Field>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'textDialog'})(DialogsForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <Dialog key={d.id} id={d.id} dialog={d.name}/>);
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} me={m.me}/>);
    let sendMessage = (formData) => props.sendMessage(formData.newTextDialog);

    return (
        <div className={s.dialogsMessagesBlock}>
            <div className={s.dialogsBlock}>
                {dialogsElements}
            </div>
            <div className={s.messagesBlock}>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={sendMessage}/>
        </div>
    )
}

export default Dialogs;