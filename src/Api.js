import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-when-doc.herokuapp.com'
});


const apis = {
     saveUser: (newUser) => api.post("/medico/cadastrar",newUser),
     getDoctor: (user) => api.post("medico/login/", user),
     savePatient: (newPatient) => api.post("/paciente/cadastrar",newPatient),
     loadPatients: (crm) => api.get(`/medico/${crm}/pacientes`),
     addPatients: (crm, cpf) => api.post(`/medico/${crm}/addPaciente/${cpf}`),
     loadDoctor: (crm) => api.get(`/medico/${crm}`),
     saveDoctor: (newDoctor,crm) => api.put(`/medico/${crm}`,newDoctor),
     saveMedicamentos: (medicamentos,cpf,crm,idConsulta) => api.post(`/medico/${crm}/${idConsulta}/medicamento/${cpf}`,medicamentos),
     addConsulta:(diagnostico,crm,cpf) => api.post(`medico/${crm}/addConsulta/${cpf}`,diagnostico),
     loadDiagnosticos: (cpf) => api.get(`/paciente/${cpf}/diagnosticos`),
     loadMedicamentos: (cpf) => api.get(`/paciente/${cpf}/medicamento`)
    }

export default apis;
