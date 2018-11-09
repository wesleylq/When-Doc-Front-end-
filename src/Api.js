import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-when-doc.herokuapp.com'
});


const apis = {
     //saveUser: (newUser) => api.post("users",newUser),
     //loadUsers: () => api.get('users'),
     getDoctor: (user) => api.post("medico/login/", user),
     savePatient: (newPatient) => api.post("/paciente/cadastrar",newPatient),
     loadPatients: () => api.get('paciente'),
     loadDoctor: () => api.get('medico'),
     saveDoctor: (newDoctor) => api.put("/medico",newDoctor),
     loadDiagnosticos: () => api.get('diagnosticos'),
     loadMedicamentos: () => api.get('medicamentos')
}

export default apis;
