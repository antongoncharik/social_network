import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout, setAuthData} from '../../redux/auth_reducer';
import {authAPI} from '../../Api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data);
                }
            });
    }

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

export default connect(mapStateToProps, {setAuthData, logout})(HeaderContainer);