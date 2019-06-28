import {renderEntireTree} from './../render';

let state = {
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
    ]
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
    currentTextPost: ''
  },
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

export let addNewPost = () => {
  state.profilePage.posts.push({
    id: 1,
    post: state.profilePage.currentTextPost,
    countLike: 0
  });
  state.profilePage.currentTextPost = '';
  renderEntireTree(state);
}

export let sendMessage = (message) => {
  state.dialogsPage.messages.push({
    id: message.id,
    me: message.me,
    message: message.message
  });
  renderEntireTree(state);
}

export let updateTextPost = (newTextPost) => {
  state.profilePage.currentTextPost = newTextPost;
  renderEntireTree(state);
}

export default state;
