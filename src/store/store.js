import axios from "axios";

const { makeAutoObservable } = require("mobx");

class Store {
  
  // Стейт

  // Авторизация

  login = "";
  password = "";
  isAuthError = false;
  token = "";

  // Инфо по компаниям

  companiesInfo = {used: 0, limit: 0};

  // Форма поиска 

  inn = null;
  tonality = "any";
  limit = null;
  startDate = new Date();
  endDate = new Date();

  seachingFormChecks = {
    maxFullness : false,

  }
  HistogramData = {
    "issueDateInterval": {
      "startDate": `${this.startDate}`,
      "endDate": `${this.endDate}`
    },
    "searchContext": {
      "targetSearchEntitiesContext": {
        "targetSearchEntities": [
          {
            "type": "company",
            "sparkId": null,
            "entityId": null,
            "inn": `${this.inn}`,  //7710137066
            "maxFullness": `${this.seachingFormChecks.maxFullness}`,
            "inBusinessNews": null
          }
        ],
        "onlyMainRole": true,
        "tonality": `${this.tonality}`,
        "onlyWithRiskFactors": false,
        "riskFactors": {
          "and": [],
          "or": [],
          "not": []
        },
        "themes": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "themesFilter": {
        "and": [],
        "or": [],
        "not": []
      }
    },
    "searchArea": {
      "includedSources": [],
      "excludedSources": [],
      "includedSourceGroups": [],
      "excludedSourceGroups": []
    },
    "attributeFilters": {
      "excludeTechNews": true,
      "excludeAnnouncements": true,
      "excludeDigests": true
    },
    "similarMode": "duplicates",
    "limit": `${this.limit}`,
    "sortType": "sourceInfluence",
    "sortDirectionType": "desc",
    "intervalType": "month",
    "histogramTypes": [
      "totalDocuments",
      "riskFactors"
    ]
  };

  // Стейт завершение
  
  // Observe activated!

  constructor() {
    makeAutoObservable(this);
  }

  // Экшены

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

  setCompanyLimits = (used, limit) => {
    this.companiesInfo.used = used;
    this.companiesInfo.limit = limit;
  }

  setStartDate = (date) => {
    this.startDate = date;
  }

  setEndDate = (date) => {
    this.endDate = date;
  }

  // Авторизация

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
        console.log(response.data);
    })
    .catch((err) => {
      console.log(err)
      this.setLogin("");
      this.setPassword("");
    });
  }

  // Проверка действительности токена

  checkToken = () => {
    if (localStorage.getItem("token") !== "" && localStorage.getItem("expire") > new Date ()) {
      this.setToken(localStorage.getItem("token"));
      // console.log(localStorage.getItem("expire"));
      // console.log(new Date ());
      return;
    }
    localStorage.clear();
  }

  // Получение информации о лимитах по компаниям

  getCompaniesInfo = () => {
    // console.log(this.token);
    axios.get("https://gateway.scan-interfax.ru/api/v1/account/info", {
      headers: {
        "Authorization" : `Bearer ${this.token}`
      }
    })
      .then((response) => {
        this.setCompanyLimits(
          response.data.eventFiltersInfo.usedCompanyCount, 
          response.data.eventFiltersInfo.companyLimit
        );
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getHistogram = () => {
    console.log(this.token); // для проверки
    axios.post("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", { 
      data: {
        "intervalType": "day",
        "histogramTypes": [
          "totalDocuments"
        ],
        "issueDateInterval": {
          "startDate": "2023-02-24T11:04:08.777Z",
          "endDate": "2023-02-24T11:04:08.777Z"
        },
        "searchContext": {
          "targetSearchEntitiesContext": {
            "targetSearchEntities": [
              {
                "type": "company"
              }
            ],
            "onlyMainRole": true,
            "tonality": "any",
            "onlyWithRiskFactors": true,
            "riskFactors": {
              "and": [
                {
                  "id": 0
                }
              ],
              "or": [
                {
                  "id": 0
                }
              ],
              "not": [
                {
                  "id": 0
                }
              ]
            },
            "themes": {
              "and": [
                {
                  "tonality": "any",
                  "entityId": 0
                }
              ],
              "or": [
                {
                  "tonality": "any",
                  "entityId": 0
                }
              ],
              "not": [
                {
                  "tonality": "any",
                  "entityId": 0
                }
              ]
            }
          },
          "searchEntitiesFilter": {
            "and": [
              {
                "type": "company"
              }
            ],
            "or": [
              {
                "type": "company"
              }
            ],
            "not": [
              {
                "type": "company"
              }
            ]
          },
          "locationsFilter": {
            "and": [
              {
                "countryCode": "string",
                "regionCode": 0
              }
            ],
            "or": [
              {
                "countryCode": "string",
                "regionCode": 0
              }
            ],
            "not": [
              {
                "countryCode": "string",
                "regionCode": 0
              }
            ]
          },
          "themesFilter": {
            "and": [
              {
                "entityId": 0
              }
            ],
            "or": [
              {
                "entityId": 0
              }
            ],
            "not": [
              {
                "entityId": 0
              }
            ]
          }
        },
        "searchArea": {
          "includedSources": [
            0
          ],
          "excludedSources": [
            0
          ],
          "includedSourceGroups": [
            0
          ],
          "excludedSourceGroups": [
            0
          ]
        },
        "attributeFilters": {
          "excludeTechNews": true,
          "excludeAnnouncements": true,
          "excludeDigests": true
        },
        "similarMode": "none"
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // Интерсептор по рекомендации ментора
  
  setToken = (token) => {
    axios.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.token = token;
  }

  //Экшены завершение
}

export default new Store ();