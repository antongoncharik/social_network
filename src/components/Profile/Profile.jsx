import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = ({userProfile, status, updateStatus, store, updatePhoto, isOwner}) => {
    return (
        <div className={s.ProfileBlock}>
            <div className={s.ProfileInfoBlock}>
                <ProfileInfo userProfile={userProfile}
                             status={status}
                             updateStatus={updateStatus}
                             updatePhoto={updatePhoto}
                             isOwner={isOwner}/>
            </div>
            <div className={s.PostsContainerBlock}>
                <PostsContainer store={store}/>
            </div>
        </div>)
}

export default Profile;
