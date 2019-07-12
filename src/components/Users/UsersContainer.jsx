import React from 'react';
import Users from './Users';
import {
  followCreator,
  unfollowCreator,
  setUsersCreator,
  setCurrentPageCreator,
  setTotalCountUsersCreator
} from './../../redux//users_reducer';
import {
  connect
} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followCreator(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowCreator(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageCreator(page));
    },
    setTotalCountUsers: (count) => {
      dispatch(setTotalCountUsersCreator(count));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
