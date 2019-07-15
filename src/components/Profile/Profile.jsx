import React from 'react';
import s from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}/>
            <PostsContainer store={props.store}/>
        </div>)
}

export default Profile;
