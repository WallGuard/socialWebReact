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
    }
};
