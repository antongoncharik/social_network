import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateTextMessageCreator} from './../../redux/dialogs_reducer';
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {
//   let state = props.store.getState();
//   let sendMessage = (text) => {
//     let action = sendMessageCreator({id: 3, me: 'me', message: text});
//     props.store.dispatch(action);
//   }
//   let changeMessage = (text) => {
//     let action = updateTextMessageCreator(text);
//     props.store.dispatch(action);
//   }
//
//   return (
//     <Dialogs dialogs={state.dialogsPage.dialogs}
//       messages={state.dialogsPage.messages}
//       currentTextMessage={state.dialogsPage.currentTextMessage}
//       sendMessage={sendMessage}
//       changeMessage={changeMessage}/>
//     )
// }

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    currentTextMessage: state.dialogsPage.currentTextMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {
      let action = sendMessageCreator({id: 3, me: 'me', message: text});
      dispatch(action);
    },
    changeMessage: (text) => {
      dispatch(updateTextMessageCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
