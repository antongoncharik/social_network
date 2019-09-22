import React from 'react';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friendsElements = props.friends.map(f => (
        <Friend key={f.id}
                id={f.id}
                name={f.name}
                ava={f.ava}/>)
    );

    return (
        <div>
            {friendsElements}
        </div>
    )
}

export default Friends;
