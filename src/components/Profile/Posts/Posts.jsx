import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import {addNewPostCreator, updateTextPostCreator} from './../../../redux/profile_reducer';

const Posts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.post} countLike={p.countLike}/>);

  let refNewPostElement = React.createRef();

  let addNewPost = () => {
    let action = addNewPostCreator();
    props.dispatch(action);
  }

  let updateTextPost = () => {
    let textPost = refNewPostElement.current.value;
    let action = updateTextPostCreator(textPost);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>Posts</h3>
      <div>
        New post
          <div>
            <textarea onChange={updateTextPost} ref={refNewPostElement}
                      value={props.currentTextPost}></textarea>
          </div>
          <div>
            <button onClick={addNewPost}>Add post</button>
          </div>
        <div>
          {postsElements}
        </div>
      </div>
    </div>)
}

export default Posts;
