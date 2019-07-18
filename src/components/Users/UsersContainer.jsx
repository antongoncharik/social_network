import React from 'react';
import Users from './Users';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCountUsers,
    setFetchingData
} from './../../redux/users_reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from './../Preloader/Preloader';
import {usersAPI} from '../../Api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetchingData(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setFetchingData(false);
                this.props.setUsers(data.items);
                this.props.setTotalCountUsers(data.totalCount);
            });
    }

    onChangePage = (p) => {
        this.props.setFetchingData(true);
        this.props.setCurrentPage(p);
        usersAPI.getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setFetchingData(false);
                this.props.setUsers(data.items);
            });
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
                          unfollow={this.props.unfollow}
                          follow={this.props.follow}
                          arrCountPage={arrCountPage}
                          users={this.props.users}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        isFetchingData: state.usersPage.isFetchingData
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCountUsers,
    setFetchingData
})(UsersContainer);