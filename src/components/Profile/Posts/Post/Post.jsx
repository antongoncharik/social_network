import React from 'react';
import s from './Post.module.css';
import anonymousAvatar from '../../../../common/resource/img/anonymous_avatar.jpg';

const Post = (props) => {
    let changeLike = () => {

    }

    return (
        <div className={s.postBlock}>
            <div>
                <img
                    src={props.userProfile ? props.userProfile.photos.small : anonymousAvatar}></img>
                {props.message}
                <div>
                    <div>
                        <div className={s.btn} onChange={changeLike}>like</div>
                        {` ${props.countLike}`}
                    </div>
                </div>
            </div>
        </div>)
}

export default Post;
