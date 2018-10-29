import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3000'
})

const apis = {
     saveUser: (newUser) => api.post("users",newUser),
     loadUsers: () => api.get('users'),
     savePatient: (newPatient) => api.post("/paciente",newPatient),
     loadPatients: () => api.get('paciente')
}


export default apis;
