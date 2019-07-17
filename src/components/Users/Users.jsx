import React from 'react';
import s from './Users.module.css';
import anonymousAvatar from './../../resource/img/anonymous_avatar.jpg';
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

const Users = (props) => {
    return <div>
        <div className={s.pageBlock}>
            {props.arrCountPage.map(p => <span className={p === props.currentPage ? s.selectedPageBlock : ''}
                                               onClick={(e) => {
                                                   props.onChangePage(p)
                                               }}>{p}</span>)}
        </div>
        {
            props.users.map(user =>
                <div key={user.id} className={s.userBlock}>
                    <div className={s.avatarBlock}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small === null ? anonymousAvatar : user.photos.small}></img></NavLink>
                    </div>
                    <div>{user.name}</div>
                    <div>{'user.age'}</div>
                    <div>{'user.status'}</div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                    <div>{user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "38b40b63-763d-46d7-82f0-267d51786bf6"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                });
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "38b40b63-763d-46d7-82f0-267d51786bf6"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id);
                                    }
                                });
                        }}>Follow</button>}
                    </div>
                </div>)
        }
    </div>
}

export default Users;
