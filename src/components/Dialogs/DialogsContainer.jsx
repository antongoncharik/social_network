import React from "react";
import Dialogs from './Dialogs';
import {sendMessage} from './../../redux/dialogs_reducer';
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

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(DialogsContainer);

