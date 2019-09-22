import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../common/Validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300);

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newTextPost'}
                       component={Textarea}
                       validate={[maxLength300]}></Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostsReduxForm = reduxForm({form: 'textPost'})(PostsForm);

const Posts = (props) => {
    let postsElements = props.posts.map((p, index) => <Post key={index}
                                                            message={p.post}
                                                            countLike={p.countLike}
                                                            userProfile={props.userProfile}/>);
    let addNewPost = (formData) => {
        props.addNewPost(formData.newTextPost);
    }

    return (
        <div className={s.postsBlock}>
            <h3>Posts</h3>
            <div>
                New post
                <PostsReduxForm onSubmit={addNewPost}/>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default Posts;