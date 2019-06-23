import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={s.friendBlock}>
      <div className={s.avaBlock}>
        <img src={props.ava}></img>
      </div>
      {props.name}
    </div>
    )
}

export default Friend;
