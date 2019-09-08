import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../common/Validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300);

const DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'newTextDialog'}
                       component={Textarea}
                       validate={[maxLength300]}></Field>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'textDialog'})(DialogsForm);

const Dialogs = ({dialogs, messages, sendMessage}) => {
    let dialogsElements = dialogs.map(d => <Dialog key={d.id} id={d.id} dialog={d.name}/>);
    let messagesElements = messages.map(m => <Message key={m.id} message={m.message} me={m.me}/>);
    let sendMessageButton = (formData) => sendMessage(formData.newTextDialog);

    return (
        <div className={s.dialogsMessagesBlock}>
            <div className={s.dialogsBlock}>
                {dialogsElements}
            </div>
            <div className={s.messagesBlock}>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={sendMessageButton}/>
        </div>
    )
}

export default Dialogs;