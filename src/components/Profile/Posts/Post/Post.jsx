import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postBlock}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIMM2jHO1YeqAGk2BsiwGV3QR91zTvWuEMMUVI34sVby66vcs-A'></img>
                {props.message}
                <div>
                    <div>
                        <button>like</button>
                        {props.countLike}
                    </div>
                </div>
            </div>
        </div>)
}

export default Post;
