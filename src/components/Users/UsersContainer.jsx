import React from 'react';
import Users from './Users';
import {getUsers, followUnfollowUser} from './../../redux/users_reducer';
import {connect} from 'react-redux';
import Preloader from './../Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, true);
    }

    onChangePage = (p) => {
        this.props.getUsers(p, this.props.pageSize, false);
    }

    render() {
        let countPage = Math.ceil(this.props.totalCountUsers / this.props.pageSize);
        let arrCountPage = [];
        for (let i = 1; i <= countPage; i++) {
            arrCountPage.push(i);
        }

        if (this.props.isFetchingData) {
            return <Preloader/>
        } else {
            return <Users onChangePage={this.onChangePage}
                          currentPage={this.props.currentPage}
                          arrCountPage={arrCountPage}
                          users={this.props.users}
                          subscribedUsers={this.props.subscribedUsers}
                          followUnfollowUser={this.props.followUnfollowUser}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        isFetchingData: state.usersPage.isFetchingData,
        subscribedUsers: state.usersPage.subscribedUsers
    }
}

export default connect(mapStateToProps, {
    getUsers,
    followUnfollowUser
})(UsersContainer);
