import React from 'react';
import Posts from './Posts';
import {
  addNewPostCreator,
  updateTextPostCreator
} from './../../../redux/profile_reducer';

const PostsContainer = (props) => {
  let state = props.store.getState();
  let addNewPost = () => {
    let action = addNewPostCreator();
    props.store.dispatch(action);
  }
  let updateTextPost = (text) => {
    let action = updateTextPostCreator(text);
    props.store.dispatch(action);
  }

  return (
    <Posts posts={state.profilePage.posts} addNewPost={addNewPost} updateTextPost={updateTextPost}/>
  )
}

export default PostsContainer;
