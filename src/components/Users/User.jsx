import React from 'react';
import s from './Users.module.css';
import anonymousAvatar from '../../common/resource/img/anonymous_avatar.jpg';
import {NavLink} from 'react-router-dom';

const User = ({users, followUnfollowUser, subscribedUsers}) => {
    return (
        users.map(user =>
            <div key={user.id} className={s.userBlock}>
                <div className={s.avatarBlock}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small === null
                            ? anonymousAvatar
                            : user.photos.small}></img></NavLink>
                </div>
                <div>{user.name}</div>
                <div>{'user.age'}</div>
                <div>{'user.status'}</div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
                <div>{user.followed
                    ? <button disabled={subscribedUsers.some(id => id === user.id)} onClick={() => {
                        followUnfollowUser(user.id, false);
                    }}>Unfollow</button>
                    : <button disabled={subscribedUsers.some(id => id === user.id)} onClick={() => {
                        followUnfollowUser(user.id, true);
                    }}>Follow</button>}
                </div>
            </div>)
    )
}

export default User;
