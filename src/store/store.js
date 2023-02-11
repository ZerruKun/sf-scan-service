import axios from "axios";

const { makeAutoObservable } = require("mobx");

class Store {
  
  //Стейт

  login = ""
  password = ""
  isAuthError = false;
  token = "";
  
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
          // console.log(response.data);
          this.setToken(response.data.accessToken);
          localStorage.setItem("token", response.data.accessToken);
          // Не понял как работать с форматом даты, который приходит в expire.
          // Ключ действителен день, реализовал иначе.
          let currentDate = new Date();
          localStorage.setItem("expire", currentDate.setDate(currentDate.getDate() + 1));
        }
        // console.log(response.data);
    })
    .catch((err) => {
      console.log(err)
      this.setLogin("");
      this.setPassword("");
    });
  }

  checkToken = () => {
    if (localStorage.getItem("token") !== "" && localStorage.getItem("expire") > new Date ()) {
      this.setToken(localStorage.getItem("token"));
      // console.log(localStorage.getItem("expire"));
      // console.log(new Date ());
      return;
    }
    localStorage.clear();
  }
}

export default new Store ();