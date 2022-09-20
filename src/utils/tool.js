import axios from "axios";

const DOMAIN = 'https://shop.cyberlearn.vn/api';
const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJKYXZhIDE3IiwiSGV0SGFuU3RyaW5nIjoiMTkvMTIvMjAyMiIsIkhldEhhblRpbWUiOiIxNjcxNDA4MDAwMDAwIiwibmJmIjoxNjQ4NjU5NjAwLCJleHAiOjE2NzE1NTU2MDB9.OhFEeK7ExgP3U24hEq7GxmL5VzAjzaEPPeOZpaWzZGE';

/* Cấu hình request cho tất cả api - response cho tất cả kết quả từ api trả về */

//Cấu hình domain gửi đi
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})
// //Cấu hình request header
// http.interceptors.request.use(
//     config => {
//         const token = getStore(ACCESS_TOKEN);
//         config.headers = {
//             ...config.headers,
//             ['Authorization']: `Bearer ${token}`,
//             ['TokenCybersoft']: TOKEN_CYBERSOFT
//         }
//         // config.headers['Content-Type'] = 'application/json';
//         return config
//     },
//     error => {
//         Promise.reject(error)
//     }
// )
// //Cấu hình kết quả trả về
// http.interceptors.response.use((response) => {
//     console.log(response)
//     return response;
// }, err => {
//     // const originalRequest = error.config;
//     console.log(err.response.status);
//     if(err.response.status === 400 || err.response.status === 404) {
//         history.push('/');
//         return  Promise.reject(err);
//     }
//     if(err.response.status === 401 || err.response.status === 403) {
//         alert('Token không hợp lệ ! Vui lòng đăng nhập lại !');
//         history.push('/login');
//         return Promise.reject(err)
//     }
// })