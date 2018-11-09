import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-when-doc.herokuapp.com'
});


const apis = {
     saveUser: (newUser) => api.post("/medico/cadastrar",newUser),    
     getDoctor: (user) => api.post("medico/login/", user),
     savePatient: (newPatient) => api.post("/paciente/cadastrar",newPatient),
     loadPatients: () => api.get('paciente'),
     loadDoctor: (crm) => api.get(`/medico/${crm}`),
     saveDoctor: (newDoctor,crm) => api.put(`/medico/${crm}`,newDoctor),
     loadDiagnosticos: () => api.get('diagnosticos'),
     loadMedicamentos: () => api.get('medicamentos')
}

export default apis;
