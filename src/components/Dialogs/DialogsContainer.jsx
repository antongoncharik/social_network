import Dialogs from './Dialogs';
import {
    sendMessageCreator,
    updateTextMessageCreator
} from './../../redux/dialogs_reducer';
import {
    connect
} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        currentTextMessage: state.dialogsPage.currentTextMessage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            let action = sendMessageCreator({
                id: 3,
                me: 'me',
                message: text
            });
            dispatch(action);
        },
        changeMessage: (text) => {
            dispatch(updateTextMessageCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
