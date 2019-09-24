import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import st from "./../../../common/FormsControls/FormsControls.module.css";

const ProfileEditForm = ({handleSubmit, userProfile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <span className={st.commonError}>
                {error}
            </span>}
            <div>Full name:{createField('full name', 'fullName', Input, [], '')}</div>
            <div>About me:{createField('about me', 'aboutMe', Textarea, [], '')}</div>
            <div>looking for a job:{createField('', 'lookingForAJob', Input, [], '', {type: 'checkbox'})}</div>
            <div>My job skills:{createField('job skills', 'lookingForAJobDescription', Textarea, [], '')}</div>
            <div>Contacts:</div>
            <div className={s.contacts}>
                <div>{Object.keys(userProfile.contacts).map(key => {
                    return <Contact key={key}
                                    titelContact={key}/>
                })}</div>
            </div>
            <button>save</button>
        </form>
    )
}

const Contact = ({titelContact}) => {
    return (
        <div>{titelContact + ':'}
            {createField(titelContact, `contacts.${titelContact}`, Input, [], '')}
        </div>
    )
}

const ProfileEditFormRedux = reduxForm({form: 'profileForm'})(ProfileEditForm);

export default ProfileEditFormRedux;