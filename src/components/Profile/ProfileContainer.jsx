import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfile, setFetchingData} from './../../redux/profile_reducer';
import {connect} from 'react-redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingData(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/29`)
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

export default connect(mapStateToProps, {setUserProfile, setFetchingData})(ProfileContainer);
