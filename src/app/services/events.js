/* eslint-disable no-undef */
import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/evento' });

export const setUserAndPassword = (user, password) => {
  i.default.headers.common.username = user;
  i.default.headers.common.password = password;
};



// CREATE
export const createEvento = async (obj) => await instance.post('/', obj);

// READ
export const getEventos = async () => await instance.get('/');

// DELETE
export const deleteEvento = async (id) => await instance.delete('/' + id)

// CREATE PERFIL
export const createPerfil = async (obj) => await instance.post('/', obj);

//INSCRIBIR EVENTO
export const inscribirPersona = async (id) => await instance.post('/', id) //aquí sería userId