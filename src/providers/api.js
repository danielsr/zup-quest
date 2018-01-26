import axios from "axios";

const baseURL = "http://localhost:5000/";

class Users {
  static save(values) {
    return axios.post(baseURL + "users", values);
  }
}

export default Users;
