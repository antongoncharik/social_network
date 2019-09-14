import {usersAPI} from '../Api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const TOGGLE_FETCHING_DATA = 'TOGGLE_FETCHING_DATA';
const SUBSCRIBE_USERS = 'SUBSCRIBE_USERS';

let initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalCountUsers: 0,
    isFetchingData: false,
    subscribedUsers: []
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
                users: [...action.users]
            }
            break;
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
            break;
        case SET_TOTAL_COUNT_USERS:
            return {
                ...state,
                totalCountUsers: action.count
            }
            break;
        case TOGGLE_FETCHING_DATA:
            return {
                ...state,
                isFetchingData: action.fetchingData
            }
            break;
        case SUBSCRIBE_USERS:
            return {
                ...state,
                subscribedUsers:
                    action.isSubscribeUser
                        ? [...state.subscribedUsers, action.userId]
                        : state.subscribedUsers.filter(id => id != action.userId)
            }
            break;
        default:
            return state;
    }
}
export const follow = (userID) => {
    return {
        type: FOLLOW,
        userID: userID
    }
}
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID: userID
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page
    }
}
export const setTotalCountUsers = (count) => {
    return {
        type: SET_TOTAL_COUNT_USERS,
        count: count
    }
}
export const setFetchingData = (fetchingData) => {
    return {
        type: TOGGLE_FETCHING_DATA,
        fetchingData: fetchingData
    }
}
export const subscribeUsers = (isSubscribeUser, userId) => {
    return {
        type: SUBSCRIBE_USERS,
        isSubscribeUser: isSubscribeUser,
        userId: userId
    }
}

export const getUsers = (currentPage, pageSize, firstSetUsers) => {
    return async (dispatch) => {
        dispatch(setFetchingData(true));
        dispatch(setCurrentPage(currentPage));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setFetchingData(false));
        dispatch(setUsers(response.data.items));
        if (firstSetUsers) {
            dispatch(setTotalCountUsers(response.data.totalCount));
        }
    }
}
export const followUnfollowUser = (userId, isFollowUser) => {
    return async (dispatch) => {
        dispatch(subscribeUsers(true, userId));
        let response = await usersAPI.unfollowUser(userId);
        dispatch(subscribeUsers(false, userId));
        if (response.data.resultCode === 0) {
            if (isFollowUser) {
                dispatch(follow(userId));
            } else {
                dispatch(unfollow(userId));
            }
        }
    }
}