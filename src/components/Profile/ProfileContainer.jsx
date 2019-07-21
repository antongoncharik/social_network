import React from 'react';
import Profile from './Profile';
import {setProfile} from './../../redux/profile_reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 10;
        setProfile(userId);
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

export default connect(mapStateToProps, {setProfile})(ProfileContainerWithRouter);
