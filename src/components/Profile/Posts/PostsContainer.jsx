import React from 'react';
import Posts from './Posts';
import {
  addNewPost,
  updateTextPost
} from './../../../redux/profile_reducer';
import {
  connect
} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    currentTextPost: state.profilePage.currentTextPost
  }
}

const PostsContainer = connect(mapStateToProps, {addNewPost, updateTextPost})(Posts);

export default PostsContainer;
