import React from 'react';
import s from './Users.module.css';
import anonymousAvatar from './../../resource/img/anonymous_avatar.jpg';
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../Api";
import {subscribeUsers} from "../../redux/users_reducer";

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
                        ? <button disabled={props.subscribedUsers.some(id => id === user.id)} onClick={() => {
                            props.subscribeUsers(true, user.id);
                            usersAPI.unfollowUser(user.id)
                                .then(response => {
                                    props.subscribeUsers(false, user.id);
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                });
                        }}>Unfollow</button>
                        : <button disabled={props.subscribedUsers.some(id => id === user.id)} onClick={() => {
                            props.subscribeUsers(true, user.id);
                            usersAPI.followUser(user.id)
                                .then(response => {
                                    props.subscribeUsers(false, user.id);
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
