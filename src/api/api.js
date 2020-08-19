import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2de7d40c-568a-4e03-9c88-c47a2bb27ca9",
    },
});

export const usersAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI obj');
        return profileAPI.getProfile(userId);
    },
};

export const authAPI = {
    me() { return instance.get(`auth/me`) },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
    },
};
