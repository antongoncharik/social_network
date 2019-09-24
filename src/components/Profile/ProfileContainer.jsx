import React from 'react';
import Profile from './Profile';
import {setProfileUser} from './../../redux/profile_reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../common/hoc/withAuthRedirect';
import {compose} from 'redux';
import {getStatus, updatePhoto, updateStatus, toggleEditMode, updateProfile} from '../../redux/profile_reducer';

class ProfileContainer extends React.Component {
    updateProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.id;
        this.props.setProfileUser(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     userProfile={this.props.userProfile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     updatePhoto={this.props.updatePhoto}
                     isOwner={!this.props.match.params.userId}
                     toggleEditMode={this.props.toggleEditMode}
                     isEditMode={this.props.isEditMode}
                     updateProfile={this.props.updateProfile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetchingData: state.profilePage.isFetchingData,
        status: state.profilePage.status,
        auth: state.auth.isAuth,
        id: state.auth.id,
        isEditMode: state.profilePage.isEditMode
    }
}

export default compose(
    connect(mapStateToProps, {setProfileUser, getStatus, updateStatus, updatePhoto, toggleEditMode, updateProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
