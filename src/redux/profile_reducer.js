import {profileAPI} from '../Api';

const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_TEXT_POST = 'UPDATE_TEXT_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_FETCHING_DATA = 'TOGGLE_FETCHING_DATA';

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
    isFetchingData: false
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 1,
                    post: state.currentTextPost,
                    countLike: 0
                }],
                currentTextPost: ''
            }
            break;
        case UPDATE_TEXT_POST:
            return {
                ...state,
                currentTextPost: action.textPost
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
    }
    return state;
}

export const addNewPost = () => {
    return {
        type: ADD_NEW_POST
    };
}

export const updateTextPost = (textPost) => {
    return {
        type: UPDATE_TEXT_POST,
        textPost: textPost
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


export const setProfileUser = (userId) => {
    return (dispatch) => {
        dispatch(setFetchingData(true));
        profileAPI.getProfileUser(userId)
            .then(response => {
                dispatch(setFetchingData(false));
                dispatch(setUserProfile(response.data));
            });
    }
}