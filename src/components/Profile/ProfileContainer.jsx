import React from 'react';
import Profile from './Profile';
import {setUserProfile, setFetchingData} from './../../redux/profile_reducer';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../Api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        this.props.setFetchingData(true);
        profileAPI.getProfileUser(userId)
            .then(response => {
                this.props.setFetchingData(false);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetchingData: state.profilePage.isFetchingData
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, setFetchingData})(ProfileContainerWithRouter);
