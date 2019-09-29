import React from 'react';
import s from "../Users/Users.module.css";
import {NavLink} from "react-router-dom";
import anonymousAvatar from "../../common/resource/img/anonymous_avatar.jpg";

const Friends = ({friends}) => {
    return (
        friends.map(friend =>
            <div key={friend.id} className={s.userBlock}>
                <div>{friend.name}</div>
                <div>{friend.status}</div>
                <div className={s.avatarBlock}>
                    <NavLink to={'/profile/' + friend.id}>
                        <img src={friend.photos.small === null
                            ? anonymousAvatar
                            : friend.photos.small}></img></NavLink>
                </div>
            </div>
        )
    )
}

export default Friends;
