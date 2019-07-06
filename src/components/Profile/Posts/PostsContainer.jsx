import React from 'react';
import Posts from './Posts';
import {
  addNewPostCreator,
  updateTextPostCreator
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
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addNewPostCreator());
    },
    updateTextPost: (text) => {
      dispatch(updateTextPostCreator(text));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
