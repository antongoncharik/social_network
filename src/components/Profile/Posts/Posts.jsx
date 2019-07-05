import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.post} countLike={p.countLike}/>);
  let refNewPostElement = React.createRef();
  let addNewPost = () => {
    props.addNewPost();
  }
  let updateTextPost = () => {
    props.updateTextPost(refNewPostElement.current.value);
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
