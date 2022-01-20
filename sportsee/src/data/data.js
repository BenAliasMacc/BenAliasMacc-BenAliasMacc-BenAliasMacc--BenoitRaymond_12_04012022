import axios from 'axios';
const baseURL = axios.create({
   baseURL: 'http://localhost:3000/user'
})

export const GetUserDatas = (id) => baseURL.get(`/${id}`)

export const GetUserActivity = (id) => baseURL.get(`/${id}/activity`)

export const GetUserSessions = (id) => baseURL.get(`/${id}/average-sessions`)

export const GetUserPerformance = (id) => baseURL.get(`/${id}/performance`)