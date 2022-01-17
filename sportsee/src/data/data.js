import axios from 'axios';
const baseURL = axios.create({
   baseURL: 'http://localhost:3000/user'
})

export const GetUserDatas = (id) => baseURL.get(`/${id}`)

export const GetUserActivity = (id) => baseURL.get(`/${id}/activity`)

export const GetUserSessions = (id) => baseURL.get(`/${id}/average-sessions`)

export const GetUserPerformance = (id) => baseURL.get(`/${id}/performance`)



// export async function GetUserDatas(id) {
//     await fetch(`http://localhost:3000/user/${id}`)
//     .then(response => {
//         return response.json();
//     });
// }

// export async function GetUserActivity(id) {
//     const userData = await fetch(`http://localhost:3000/user/${id}/activity`)
//     .then(response => response.json());

//     return userData;
// }

// export async function GetUserSessions(id) {
//     const userData = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
//     .then(response => response.json());

//     return userData;
// }

// export async function GetUserPerformance(id) {
//     const userData = await fetch(`http://localhost:3000/user/${id}/performance`)
//     .then(response => response.json());

//     return userData;
// }