import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {getFriends} from "../../redux/selectors";

const FriendsContainer = ({friends}) => {
    return (
        <Friends friends={friends}/>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state)
    }
}

export default connect(mapStateToProps, null)(FriendsContainer);
