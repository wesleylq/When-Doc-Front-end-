import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3000/paciente'
})

const apis = {
     savePatient: (newPatient) => api.post("Patients",newPatient),
     loadPatients: () => api.get('Patients')
}

export default apis;