import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  if (!props.users.length) {
    props.setUsers([{
        id: 1,
        fullname: 'Roma',
        age: 24,
        followed: true,
        status: 'i am cool',
        location: {
          country: 'Belarus',
          city: 'Minsk'
        },
        srcAvatar: 'https://bipbap.ru/wp-content/uploads/2018/03/01-700x1050-640x960.jpg'
      },
      {
        id: 2,
        fullname: 'Sasha',
        age: 26,
        followed: true,
        status: 'i am cool too',
        location: {
          country: 'Belarus',
          city: 'Minsk'
        },
        srcAvatar: 'https://o-viber.ru/wp-content/uploads/2017/08/mujskie_avatarki-5.png'
      },
      {
        id: 3,
        fullname: 'Nikolay',
        age: 25,
        followed: false,
        status: 'i am cool too',
        location: {
          country: 'Russia',
          city: 'Moskow'
        },
        srcAvatar: 'http://www.youloveit.ru/uploads/posts/2016-03/1457531985_youloveit_ru_zveropolis_avatarki02.jpg'
      }
    ])
  }

  return (
    props.users.map((user) =>
      <div key={user.id} className={s.userBlock}>
        <div>{user.fullname}</div>
        <div>{user.age}</div>
        <div className={s.avatarBlock}>
          <img src={user.srcAvatar}></img>
        </div>
        <div>{user.status}</div>
        <div>{user.location.country}</div>
        <div>{user.location.city}</div>
        <div>{user.followed ?
          <div>
            <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
          </div> :
          <div>
            <button onClick={() => {props.follow(user.id)}}>Follow</button>
           </div>}
        </div>
     </div>)
  )
}

export default Users;
