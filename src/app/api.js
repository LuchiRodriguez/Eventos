/* eslint-disable no-undef */
import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/NOMBRE' });

<<<<<<< HEAD
axios.post("http://localhost:8080/login", {},
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: "basic " + btoa(userName + ":" + password),
    },
  }
).then((response) => console.log(response), (error) => console.log(error));
=======
export const loguear = async (userName, password) => {
    await axios.post("http://localhost:8080/login", {},
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "basic " + btoa(userName + ":" + password),
            },
        }
    ).then((response) => console.log(response), (error) => console.log(error));
}

>>>>>>> 41631ce0c4666131cc6e7491403e4902a6872ded

// CREATE
export const createEvento = async (obj) => await instance.post('/', obj);

// READ
export const getEventos = async () => await instance.get('/');

// DELETE
export const deleteEvento = async (id) => await instance.delete('/' + id)

<<<<<<< HEAD
//CREATE PERFIL 
export const createPerfil = async (obj) => await instance.post('/', obj);
=======
// CREATE PERFIL
export const createPerfil = async (obj) => await instance.post('/', obj);
>>>>>>> 41631ce0c4666131cc6e7491403e4902a6872ded
