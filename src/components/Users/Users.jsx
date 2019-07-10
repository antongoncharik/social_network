import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import anonymousAvatar from './../../resource/img/anonymous_avatar.jpg';

class Users extends React.Component {
    componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
      return (
        this.props.users.map((user) =>
          <div key={user.id} className={s.userBlock}>
            <div className={s.avatarBlock}>
              <img src={user.photos.small === null ? anonymousAvatar : user.photos.small}></img>
            </div>
            <div>{user.name}</div>
            <div>{'user.age'}</div>
            <div>{'user.status'}</div>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
            <div>{user.followed ?
              <div>
                <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button>
              </div> :
              <div>
                <button onClick={() => {this.props.follow(user.id)}}>Follow</button>
               </div>}
            </div>
         </div>)
      )
  }
}

export default Users;
