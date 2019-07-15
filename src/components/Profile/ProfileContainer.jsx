import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfile, setFetchingData} from './../../redux/profile_reducer';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        this.props.setFetchingData(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
