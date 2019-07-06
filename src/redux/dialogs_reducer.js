const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';

let initialState = {
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
}

export const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:{
    let newState = {...state};
    newState.messages = [...state.messages];
    newState.messages.push({
      id: action.id,
      me: action.me,
      message: action.message
      });
    newState.currentTextMessage = '';
    return newState;
    break;}
    case UPDATE_TEXT_MESSAGE:{
      let newState = {...state};
      newState.currentTextMessage = action.textMessage;
      return newState;
      break;}
  }
  return state;
}
export const sendMessageCreator = (objParam) => {
  return {
    type: SEND_MESSAGE,
    id: objParam.id,
    me: objParam.me,
    message: objParam.message
  };
}
export const updateTextMessageCreator = (textMessage) => {
  return {
    type: UPDATE_TEXT_MESSAGE,
    textMessage: textMessage
  };
}
