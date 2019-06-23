import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name} ava={f.ava}/>);

  return (
    <div>
      {friendsElements}
    </div>
    )
}

export default Friends;
