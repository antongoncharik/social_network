import React from 'react';
import Users from './Users';
import {
  followCreator,
  unfollowCreator,
  setUsersCreator
} from './../../redux//users_reducer';
import {
  connect
} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
