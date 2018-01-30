import axios from "axios";

const baseURL = "http://localhost:5000/";

export class Users {
  static save(values) {
    return axios.post(baseURL + "users", values);
  }

  static login(values) {
    return axios.get(
      baseURL + "users?email=" + values.email + "&pwd=" + values.pwd
    );
  }

  static setLocal(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static remLocal() {
    localStorage.removeItem("user");
  }
}

export class Banks {
  static getAll() {
    return axios.get(baseURL + "banks");
  }
}

export class Refunds {
  static save(values) {
    if (values.id) {
      return axios.patch(baseURL + "refunds/" + values.id, values);
    } else {
      return axios.post(baseURL + "refunds", values);
    }
  }

  static get(id) {
    return axios.get(baseURL + "refunds/" + id);
  }

  static getByUser(userId) {
    return axios.get(baseURL + "users/" + userId + "/refunds");
  }
}
