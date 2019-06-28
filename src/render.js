import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addNewPost, sendMessage, updateTextPost} from './redux/state';

export let renderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                      addNewPost={addNewPost}
                      sendMessage={sendMessage}
                      updateTextPost={updateTextPost}/>, document.getElementById('root'));
}
