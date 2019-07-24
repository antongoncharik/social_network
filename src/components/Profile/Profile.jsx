import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} status='i am cool'/>
            <PostsContainer store={props.store}/>
        </div>)
}

export default Profile;
