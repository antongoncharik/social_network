import React from "react";
import Dialogs from './Dialogs';
import {sendMessageCreator} from './../../redux/dialogs_reducer';
import {connect} from 'react-redux';
import {compose} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";

class DialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs dialogs={this.props.dialogs}
                     messages={this.props.messages}
                     sendMessage={this.props.sendMessage}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        auth: state.auth.isAuth
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
        }
    }
}

export default compose(
    connect(mapStateToProps, {mapDispatchToProps}),
    withAuthRedirect
)(DialogsContainer);

