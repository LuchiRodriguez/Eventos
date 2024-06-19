/* eslint-disable no-undef */
import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/evento' });


// CREATE
export const createEvento = async (obj) => await instance.post('/', obj);

// READ
export const getEventos = async () => await instance.get('/');

// DELETE
export const deleteEvento = async (id) => await instance.delete('/' + id)

// CREATE PERFIL
export const createPerfil = async (obj) => await instance.post('/', obj);

