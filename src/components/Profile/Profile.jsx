import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = ({userProfile, status, updateStatus, store}) => {
    return (
        <div className={s.ProfileBlock}>
            <div className={s.ProfileInfoBlock}>
                <ProfileInfo userProfile={userProfile}
                             status={status}
                             updateStatus={updateStatus}/>
            </div>
            <div className={s.PostsContainerBlock}>
                <PostsContainer store={store}/>
            </div>
        </div>)
}

export default Profile;
