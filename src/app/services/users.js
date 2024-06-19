import axios from 'axios';

export const loguear = async (userName, password) => {
  await axios.post("http://localhost:8080/user", {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "basic " + btoa(userName + ":" + password),
      },
    }
  ).then((response) => console.log(response), (error) => console.log(error));
}

//INSCRIBIR EVENTO
export const inscribirPersona = async (id) => await loguear.post('/', id) //aquí sería userId
