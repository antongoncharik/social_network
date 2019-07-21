import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={s.dialogBlock}>
            <div className={s.iconBlock}>
                <img src='https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png'></img>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.dialog}</NavLink>
            </div>
        </div>)
}

export default Dialog;
