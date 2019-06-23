import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.post} countLike={p.countLike}/>);

  return (
    <div className={s.postsBlock}>
      <h3>Posts</h3>
      <div>
        New post
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        <div>
          {postsElements}
        </div>
      </div>
    </div>)
}

export default Posts;
