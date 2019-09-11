import React from 'react';
import Users from './Users';
import {getUsers, followUnfollowUser} from './../../redux/users_reducer';
import {connect} from 'react-redux';
import Preloader from './../Preloader/Preloader';
import {
    getCurrentPageOfState, getIsFetchingDataOfState,
    getPageSizeOfState, getSubscribedUsersOfState,
    getTotalCountUsersOfState, getUsersOfStateReselect
} from "../../redux/selectors";

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
        let countPagePart = Math.ceil(countPage / this.props.pageSize);

        if (this.props.isFetchingData) {
            return <Preloader/>
        } else {
            return <Users onChangePage={this.onChangePage}
                          currentPage={this.props.currentPage}
                          arrCountPage={arrCountPage}
                          countPagePart={countPagePart}
                          pageSize={this.props.pageSize}
                          users={this.props.users}
                          subscribedUsers={this.props.subscribedUsers}
                          followUnfollowUser={this.props.followUnfollowUser}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersOfStateReselect(state),
        currentPage: getCurrentPageOfState(state),
        pageSize: getPageSizeOfState(state),
        totalCountUsers: getTotalCountUsersOfState(state),
        isFetchingData: getIsFetchingDataOfState(state),
        subscribedUsers: getSubscribedUsersOfState(state)
    }
}

export default connect(mapStateToProps, {getUsers, followUnfollowUser})(UsersContainer);