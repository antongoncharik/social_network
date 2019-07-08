const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
  ]
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: true
            }
          }
          return user;
        })
      }
      break;
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: false
            }
          }
          return user;
        })
      }
      break;
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
      break;
    default:
      return state;
  }
}

export const followCreator = (userID) => {
  return {
    type: FOLLOW,
    userID: userID
  }
}
export const unfollowCreator = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID
  }
}
export const setUsersCreator = (users) => {
  return {
    type: SET_USERS,
    users: users
  }
}
