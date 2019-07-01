import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
        <ProfileInfo />
        <Posts
          posts={props.profilePage.posts}
          dispatch={props.dispatch}
          currentTextPost={props.profilePage.currentTextPost}/>
    </div>)
}

export default Profile;
