import axios from "axios";

const baseURL = "http://localhost:5000/";

class Users {
  static save(values) {
    return axios.post(baseURL + "users", values);
  }

  static login(values) {
    return axios.get(
      baseURL + "users?email=" + values.email + "&pwd=" + values.pwd
    );
  }

  static setLocal(user) {
    localStorage.setItem("user", user);
  }
}

export default Users;
