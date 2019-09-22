import {profileAPI} from '../Api';

const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_FETCHING_DATA = 'TOGGLE_FETCHING_DATA';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

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
    },
    userProfile: null,
    isFetchingData: false,
    status: ''
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 1,
                    post: action.newTextPost,
                    countLike: 0
                }],
                currentTextPost: ''
            }
            break;
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
            break;
        case TOGGLE_FETCHING_DATA:
            return {
                ...state,
                isFetchingData: action.fetchingData
            }
            break;
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            break;
        case SET_PHOTO:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            }
            break;
    }
    return state;
}

export const addNewPost = (newTextPost) => {
    return {
        type: ADD_NEW_POST,
        newTextPost
    };
}
export const setUserProfile = (userProfile) => {
    return {
        type: SET_USER_PROFILE,
        userProfile: userProfile
    };
}
export const setFetchingData = (fetchingData) => {
    return {
        type: TOGGLE_FETCHING_DATA,
        fetchingData: fetchingData
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}
export const setPhoto = (photos) => {
    return {
        type: SET_PHOTO,
        photos: photos
    }
}

export const setProfileUser = (userId) => {
    return async (dispatch) => {
        dispatch(setFetchingData(true));
        let response = await profileAPI.getProfileUser(userId);
        dispatch(setFetchingData(false));
        dispatch(setUserProfile(response.data));
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}
export const updatePhoto = (photo) => {
    return async (dispatch) => {
        let response = await profileAPI.updatePhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos));
        }
    }
}