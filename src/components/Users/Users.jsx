import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import anonymousAvatar from './../../resource/img/anonymous_avatar.jpg';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
      });
  }

  onChangePage = (p) => {
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
      });
  }

  render() {
    let countPage = Math.ceil(this.props.totalCountUsers / this.props.pageSize);
    let arrCountPage = [];
    for (let i = 1; i <= countPage; i++) {
      arrCountPage.push(i);
    }

      return <div>
          <div className={s.pageBlock}>
            {arrCountPage.map(p => <span className={p === this.props.currentPage ? s.selectedPageBlock : ''}
              onClick={(e) => {this.onChangePage(p)}}>{p}</span>)}
          </div>
      {
        this.props.users.map(user =>
          <div key={user.id} className={s.userBlock}>
            <div className={s.avatarBlock}>
              <img src={user.photos.small === null ? anonymousAvatar : user.photos.small}></img>
            </div>
            <div>{user.name}</div>
            <div>{'user.age'}</div>
            <div>{'user.status'}</div>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
            <div>{user.followed
                ? <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button>
                : <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
            </div>
         </div>)
       }
      </div>
  }
}

export default Users;
