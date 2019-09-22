import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';
import anonymousGuest from '../../../common/resource/img/anonymous_guest.png';

const Dialog = ({id, dialog}) => {
    return (
        <div className={s.dialogBlock}>
            <div className={s.iconBlock}>
                <img src={anonymousGuest}></img>
                <NavLink to={`/dialogs/${id}`} activeClassName={s.active}>{dialog}</NavLink>
            </div>
        </div>)
}

export default Dialog;
