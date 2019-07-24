import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c8b5abcb-2196-40e6-bc64-c416eb77885e"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    }
};

export const profileAPI = {
    getProfileUser(userId) {
        return instance.get(`profile/${userId}`)
    }
};

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    }
};
