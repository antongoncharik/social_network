import {
    profileReduser
} from './profile_reducer';
import {
    dialogsReduser
} from './dialogs_reducer';
import {
    sidebarReduser
} from './sidebar_reducer';

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
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.profilePage = sidebarReduser(this._state.profilePage, action);
        this.renderEntireTree(this._state);
    },
    subscribe(obsever) {
        this.renderEntireTree = obsever;
    }
}
