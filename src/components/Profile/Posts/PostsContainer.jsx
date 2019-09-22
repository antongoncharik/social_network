import React from 'react';
import Posts from './Posts';
import {addNewPost} from './../../../redux/profile_reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        currentTextPost: state.profilePage.currentTextPost,
        userProfile: state.profilePage.userProfile
    }
}

const PostsContainer = connect(mapStateToProps, {addNewPost})(Posts);

export default PostsContainer;
