import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "38b40b63-763d-46d7-82f0-267d51786bf6"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(id) {
        instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollowUser(id) {
        instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
};
