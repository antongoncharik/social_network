const ADD_NEW_POST = 'ADD_NEW_POST';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_TEXT_POST = 'UPDATE_TEXT_POST';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';

export let store = {
  _state: {
    dialogsPage: {
      dialogs: [{
          id: 1,
          name: 'Anton'
        },
        {
          id: 2,
          name: 'Andrey'
        },
        {
          id: 3,
          name: 'Anna'
        },
        {
          id: 4,
          name: 'Maks'
        },
        {
          id: 5,
          name: 'Roma'
        }
      ],
      messages: [{
          id: 1,
          me: 'me',
          message: 'Hi!'
        },
        {
          id: 2,
          me: 'not',
          message: 'How are you?'
        },
        {
          id: 3,
          me: 'me',
          message: 'What are you doing?'
        }
      ],
      currentTextMessage: ''
    },
    profilePage: {
      posts: [{
          id: 1,
          post: 'Hi Anton!',
          countLike: 3
        },
        {
          id: 1,
          post: 'Yoo!',
          countLike: 6
        },
        {
          id: 1,
          post: 'How are you?!',
          countLike: 8
        },
        {
          id: 1,
          post: 'I am fine!!',
          countLike: 11
        }
      ],
      currentTextPost: '',
      sidebar: {
        friends: [{
          id: 1,
          name: 'Anna',
          ava: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png'
        }, {
          id: 2,
          name: 'Roma',
          ava: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png'
        }, {
          id: 3,
          name: 'Sasha',
          ava: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png'
        }]
      }
    }
  },
  getState() {
    return this._state;
  },
  renderEntireTree() {

  },
  dispatch(action) {
    switch (action.type) {
      case ADD_NEW_POST:
        this.addNewPost();
        break;
      case SEND_MESSAGE:
        this.sendMessage(action);
        break;
      case UPDATE_TEXT_POST:
        this.updateTextPost(action);
        break;
      case UPDATE_TEXT_MESSAGE:
        this.updateTextMessage(action);
        break;
    }
  },
  addNewPost() {
    this._state.profilePage.posts.push({
      id: 1,
      post: this._state.profilePage.currentTextPost,
      countLike: 0
    });
    this._state.profilePage.currentTextPost = '';
    this.renderEntireTree(this._state);
  },
  sendMessage(action) {
    this._state.dialogsPage.messages.push({
      id: action.id,
      me: action.me,
      message: action.message
    });
    this._state.dialogsPage.currentTextMessage = '';
    this.renderEntireTree(this._state);
  },
  updateTextPost(action) {
    this._state.profilePage.currentTextPost = action.textPost;
    this.renderEntireTree(this._state);
  },
  updateTextMessage(action) {
    this._state.dialogsPage.currentTextMessage = action.textMessage;
    this.renderEntireTree(this._state);
  },
  subscribe(obsever) {
    this.renderEntireTree = obsever;
  }
}

export const addNewPostCreator = () => {
  return {
    type: ADD_NEW_POST
  };
}
export const sendMessageCreator = (objParam) => {
  return {
    type: SEND_MESSAGE,
    id: objParam.id,
    me: objParam.me,
    message: objParam.message
  };
}
export const updateTextPostCreator = (textPost) => {
  return {
    type: UPDATE_TEXT_POST,
    textPost: textPost
  };
}
export const updateTextMessageCreator = (textMessage) => {
  return {
    type: UPDATE_TEXT_MESSAGE,
    textMessage: textMessage
  };
}
