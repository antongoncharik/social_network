import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9181c821-23c4-4bb8-9b56-5dee75de7615"
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
