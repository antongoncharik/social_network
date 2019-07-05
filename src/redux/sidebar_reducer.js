let initialState = {
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
};

export const sidebarReduser = (state = initialState, action) => {
  return state;
}
