import axios from 'axios';
export const loguear = async (username, password) => {
  await axios.post("http://localhost:8080/user", {},

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "basic " + btoa(username + ":" + password),
      },
    }
  ).then((response) => console.log(response), (error) => console.log(error));
}
<<<<<<< HEAD
export const setUserAndPassword = (user, password) => {
  i.default.headers.common.username = user;
  i.default.headers.common.password = password;
};
=======

//INSCRIBIR EVENTO
export const inscribirPersona = async (id) => await loguear.post('/', id) //aquí sería userId
>>>>>>> master
