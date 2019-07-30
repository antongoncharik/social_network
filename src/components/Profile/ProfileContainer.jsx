import React from 'react';
import Profile from './Profile';
import {setProfileUser} from './../../redux/profile_reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getStatus, updateStatus} from '../../redux/profile_reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 10;
        this.props.setProfileUser(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     userProfile={this.props.userProfile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetchingData: state.profilePage.isFetchingData,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {setProfileUser, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
