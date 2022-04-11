import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";
const domainPath = 'http://localhost:3001';

//Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

//Daftar API - POST
const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);

//Daftar API - DELETE
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('post', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;
// const GetAPI = (path) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}`)
//             .then(response => response.json())
//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
//     return promise;
// }

// const PostAPI = (path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}`, {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })

//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
//     return promise;
// }

// const DeleteAPI = (path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}/${data}`, {method: 'DELETE'})
//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
// }

