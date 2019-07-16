import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthData} from '../../redux/auth_reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data);
                }
            });
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
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

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);