import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth_reducer';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
                    logout={this.props.logout}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);