import axios from "axios";

const { makeAutoObservable } = require("mobx");

class Store {
  
  //Стейт

  login = ""
  password = ""
  isAuthError = false;
  token = {};
  
  // Observe activated!

  constructor() {
    makeAutoObservable(this);
  }

  //Экшены

  setLogin = (login) => {
    this.login = login;
  }

  setPassword = (password) => {
    this.password = password;
  }

  setIsAuthError = (bool) => {
    this.isAuthError = bool;
  }

  setToken = (token) => {
    this.token = token;
  }

  getToken = () => {
    axios
    .post("https://gateway.scan-interfax.ru/api/v1/account/login", {
        login : `${this.login}`,
        password : `${this.password}`
    })
    .then((response) => {
        if(response.status === 200) {
          console.log(response.data);
          this.setToken(response.data);
        }
        console.log(this.token);
    })
    .catch((err) => {
      console.log(err)
      this.setLogin("");
      this.setPassword("");
    });
  }
}

export default new Store ();