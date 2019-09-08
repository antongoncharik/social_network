import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({userProfile, status, updateStatus, store}) => {
    return (
        <div>
            <ProfileInfo userProfile={userProfile}
                         status={status}
                         updateStatus={updateStatus}/>
            <PostsContainer store={store}/>
        </div>)
}

export default Profile;
