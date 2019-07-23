import React from 'react';
import Profile from './Profile';
import {setProfile} from './../../redux/profile_reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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
        isFetchingData: state.profilePage.isFetchingData,
    }
}

export default compose(
    connect(mapStateToProps, {setProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
