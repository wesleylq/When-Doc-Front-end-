import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3001/'
})

const apis = {
     saveUser: (newUser) => api.post("users",newUser),
     loadUsers: () => api.get('users')

}


export default apis;