import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input} from "../../../common/FormsControls/FormsControls";

const ProfileEditForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('about me', 'aboutMe', Input, [], '')}
            {createField('', 'lookingForAJob', Input, [], '', {type: 'checkbox'})}
            {createField('job skills', 'lookingForAJobDescription', Input, [], '')}
            <button>save</button>
        </form>
    )
}

const ProfileEditFormRedux = reduxForm({form: 'profileForm'})(ProfileEditForm);

export default ProfileEditFormRedux;