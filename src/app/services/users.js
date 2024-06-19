import axios from 'axios';
<<<<<<< HEAD
export const loguear = async (username, password) => {
=======

export const loguear = async (userName, password) => {
>>>>>>> master
  await axios.post("http://localhost:8080/user", {},

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "basic " + btoa(username + ":" + password),
      },
    }
  ).then((response) => console.log(response), (error) => console.log(error));
}
export const setUserAndPassword = (user, password) => {
  i.default.headers.common.username = user;
  i.default.headers.common.password = password;
};
