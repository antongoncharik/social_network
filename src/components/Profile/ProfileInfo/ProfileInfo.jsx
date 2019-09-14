import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Preloader/Preloader';
import ProfileStatusWithHook from "./ProfileIStatusWithHook";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className={s.commonProfile}>
            <div className={s.logoBlock}>
                <img
                    src='https://global.razor.com/ru/wp-content/uploads/sites/9/2015/10/product-hub-bg-ripstik-1200x270.jpg'></img>
            </div>
            <div className={s.profileInfoBlock}>
                <div className={s.faceBlock}>
                    <ProfileStatusWithHook status={props.status}
                                           updateStatus={props.updateStatus}/>
                    <div>{props.userProfile.fullName}</div>
                    <div className={s.avaBlock}><img src={props.userProfile.photos.large}></img></div>
                </div>
                <div className={s.aboutUserBlock}>
                    <div>aboutMe:</div>
                    <div>{props.userProfile.aboutMe}</div>
                    <div>contacts:</div>
                    <div>facebook: {props.userProfile.contacts.facebook}</div>
                    <div>website: {props.userProfile.contacts.website}</div>
                    <div>vk: {props.userProfile.contacts.vk}</div>
                    <div>twitter: {props.userProfile.contacts.twitter}</div>
                    <div>instagram: {props.userProfile.contacts.instagram}</div>
                    <div>youtube: {props.userProfile.contacts.youtube}</div>
                    <div>github: {props.userProfile.contacts.github}</div>
                    <div>mainLink: {props.userProfile.contacts.mainLink}</div>
                    <div>lookingForAJob:</div>
                    <div>{props.userProfile.lookingForAJob}</div>
                </div>
            </div>
        </div>)
}

export default ProfileInfo;
