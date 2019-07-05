const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_TEXT_POST = 'UPDATE_TEXT_POST';

let initialState = {
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

export const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      state.posts.push({
        id: 1,
        post: state.currentTextPost,
        countLike: 0
      });
      state.currentTextPost = '';
      break;
    case UPDATE_TEXT_POST:
      state.currentTextPost = action.textPost;
      break;
  }
  return state;
}
export const addNewPostCreator = () => {
  return {
    type: ADD_NEW_POST
  };
}
export const updateTextPostCreator = (textPost) => {
  return {
    type: UPDATE_TEXT_POST,
    textPost: textPost
  };
}
