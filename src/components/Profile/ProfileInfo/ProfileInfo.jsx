import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Preloader/Preloader';
import ProfileStatusWithHook from "./ProfileIStatusWithHook";
import anonymousAvatar from '../../../common/resource/img/anonymous_avatar.jpg';
import logoBackground from '../../../common/resource/img/logo_background.jpg';
import ProfileEditFormRedux from "./ProfileEditForm";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    const choosePhoto = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }

    const toggleEditMode = (isEditMode) => {
        props.toggleEditMode(isEditMode);
    }

    const onSubmit = (formData) => {
        props.updateProfile(formData);
    };

    return (
        <div className={s.profileBlock}>
            <div className={s.logoBlock}>
                <img
                    src={logoBackground}></img>
            </div>
            <div className={s.profileInfoBlock}>
                <ProfileLeftBlock userProfile={props.userProfile}
                                  isOwner={props.isOwner}
                                  status={props.status}
                                  updateStatus={props.updateStatus}
                                  choosePhoto={choosePhoto}
                                  toggleEditMode={toggleEditMode}/>
                {props.isEditMode && <ProfileEditFormRedux onSubmit={onSubmit}
                                                           userProfile={props.userProfile}
                                                           initialValues={props.userProfile}/> ||
                <ProfileRightBlock userProfile={props.userProfile}/>}

            </div>
        </div>)
}
const ProfileLeftBlock = (props) => {
    return (
        <div className={s.profileLeftBlock}>
            <ProfileStatusWithHook status={props.status}
                                   updateStatus={props.updateStatus}/>
            <div><b>{props.userProfile.fullName}</b></div>
            <div className={s.avaBlock}>
                <img src={props.userProfile.photos.large || anonymousAvatar}></img>
            </div>
            <div>{props.isOwner && <input type="file" onChange={props.choosePhoto} className={s.btn}/>}</div>
            {props.isOwner && <button onClick={() => props.toggleEditMode(true)}>edit profile</button>}
        </div>
    )
}
const ProfileRightBlock = (props) => {
    return (
        <div className={s.profileRightBlock}>
            <div><b>about me:</b></div>
            <div>{props.userProfile.aboutMe}</div>
            <div><b>looking for a job: </b>{props.userProfile.lookingForAJob && 'yes' || 'no'}</div>
            {props.userProfile.lookingForAJob && <div>
                <div><b>lookingForAJobDescription:</b></div>
                <div>{props.userProfile.lookingForAJobDescription}</div>
            </div>}
            <div><b>Contacts:</b></div>
            <div className={s.contacts}>
                <div>{Object.keys(props.userProfile.contacts).map(key => {
                    return <Contact key={key}
                                    titelContact={key}
                                    valueContact={props.userProfile.contacts[key]}/>
                })}</div>
            </div>
        </div>
    )
}
const Contact = ({titelContact, valueContact}) => {
    return (
        <div>
            <b>{`${titelContact}: `}</b>{valueContact}
        </div>
    )
}

export default ProfileInfo;
