import axios from "axios";

const { makeAutoObservable } = require("mobx");

class Store {
  
  // Стейт

  // Авторизация

  login = "";
  password = "";
  token = "";
  isAuthLoading = false;
  isAuthError = false;

  // Инфо по компаниям

  companiesInfo = {used: 0, limit: 0};

  // Форма поиска 

  inn = null;
  tonality = "any";
  limit = 0;
  // startDate = new Date();
  startDate = new Date("2022-01-01");
  endDate = new Date();

  seachingFormChecks = {
    maxFullness : false,
    inBusinessNews: false,
    onlyMainRole: false,
    onlyWithRiskFactors: false,
    isTechNews: true,
    isAnnouncement: true,
    isDigest: true,
  }

  // Cуммарные результат поиска

  summaryDates = [];
  summaryAll = [];
  summaryRisks = [];
  summaryArticles = 0;
  summaryResults = {};
  isSummaryAllowed = false;
  isSummaryLoading = false;
  isSummaryError = false;

  // ID публикаций

  publishIds = {};
  publishes = [];

  // Стейт завершение


  // Моки

  // Количество публикаций за конкретные даты

  testSummaryResults = {
    "data": [{
      "data": [{
        "date": "2020-05-01T03:00:00+03:00",
        "value": 8
      }, {
        "date": "2020-06-01T03:00:00+03:00",
        "value": 6
      }, {
        "date": "2020-11-01T03:00:00+03:00",
        "value": 7
      }, {
        "date": "2020-12-01T03:00:00+03:00",
        "value": 5
      }, {
        "date": "2020-13-01T03:00:00+03:00",
        "value": 8
      }, {
        "date": "2020-14-01T03:00:00+03:00",
        "value": 6
      }, {
        "date": "2020-15-01T03:00:00+03:00",
        "value": 7
      }, {
        "date": "2020-16-01T03:00:00+03:00",
        "value": 5
      }, {
        "date": "2020-17-01T03:00:00+03:00",
        "value": 3
      }],
      "histogramType": "totalDocuments"
    }, {
      "data": [{
        "date": "2020-05-01T03:00:00+03:00",
        "value": 0
      }, {
        "date": "2020-06-01T03:00:00+03:00",
        "value": 1
      }, {
        "date": "2020-11-01T03:00:00+03:00",
        "value": 2
      }, {
        "date": "2020-12-01T03:00:00+03:00",
        "value": 3
      }, {
        "date": "2020-05-01T03:00:00+03:00",
        "value": 0
      }, {
        "date": "2020-06-01T03:00:00+03:00",
        "value": 1
      }, {
        "date": "2020-11-01T03:00:00+03:00",
        "value": 2
      }, {
        "date": "2020-12-01T03:00:00+03:00",
        "value": 3
      }, {
        "date": "2020-12-01T03:00:00+03:00",
        "value": 0
      }],
      "histogramType": "riskFactors"
    }]
  }

  // Список ID публикаций за указанные даты

  testPublishIds = {
    "items": [{
      "encodedId": "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw=",
      "influence": 700.0,
      "similarCount": 3
    }, {
      "encodedId": "1:fmYoHEjQrRbQhz3RiUtm4oCh0JLRmtCLIyU10IzigqzRgGjQmCoR0JFg0YRhwrVzN9CxDUM50KcpdTbRiNCLwpjRkuKAphXRkVxh0JU50K5uWdC50L7RjX0C0KwQRsKp",
      "influence": 607.0,
      "similarCount": 8
    }, {
      "encodedId": "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw=",
      "influence": 700.0,
      "similarCount": 3
    }, {
      "encodedId": "1:fmYoHEjQrRbQhz3RiUtm4oCh0JLRmtCLIyU10IzigqzRgGjQmCoR0JFg0YRhwrVzN9CxDUM50KcpdTbRiNCLwpjRkuKAphXRkVxh0JU50K5uWdC50L7RjX0C0KwQRsKp",
      "influence": 607.0,
      "similarCount": 8
    }],
    "mappings": [{
      "inn": "7710137066",
      "entityIds": [534868]
    }]
  }

  testPublishes = [{
    "ok": {
      "schemaVersion": "1.2",
      "id": "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw=",
      "version": 1,
      "issueDate": "2019-11-06T09:44:00+03:00",
      "url": "https://www.vesti.ru/doc.html?id=3206990",
      "source": {
        "id": 3264,
        "groupId": 8388638,
        "name": "Вести.Ru (vesti.ru)",
        "categoryId": 7,
        "levelId": 1
      },
      "dedupClusterId": "2596EE21",
      "title": {
        "text": "Медведь напал на охотника в Приморье",
        "markup": "<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence>Медведь напал на охотника в <entity type=\"location\" local-id=\"6\">Приморье</entity>\r\n<data>\r\n<div>    <div><p></sentence></scandoc>"
      },
      "content": {
        "markup": "<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence><entity type=\"theme\" local-id=\"1\"><entity type=\"theme\" local-id=\"5\">Медведь напал на жителя <entity type=\"location\" local-id=\"6\">Приморья</entity>, пострадавший госпитализирован, - сообщает \"Вести: Приморье\" со ссылкой на <entity type=\"company\" local-id=\"0\">\"Интерфакс-Дальний Восток\"</entity>. </entity></entity></sentence><sentence>Сотрудники полиции проводят проверку по факту инцидента, связанного с нападением медведя на жителя <entity type=\"location\" local-id=\"7\">Уссурийска </entity>в лесу, в окрестностях <entity type=\"location\" local-id=\"8\">села Яконовка</entity>. </sentence><sentence><entity type=\"theme\" local-id=\"2\">Пострадавшего госпитализировали в реанимационное отделение городской больницы.</p>\r\n\r\n<p></entity></sentence><sentence>По данным медиков, он прооперирован, сейчас его жизни ничто не угрожает. </sentence><sentence><entity type=\"theme\" local-id=\"4\">Полицейские установили, что у мужчины есть разрешение на охоту, оружие должным образом зарегистрировано. </entity></sentence><sentence>Обстоятельства случившегося выясняются.</p>\r\n\r\n<p></sentence><sentence><entity type=\"theme\" local-id=\"3\">Напомним, ранее сообщалось, что в минувшие выходные в окрестностях <entity type=\"location\" local-id=\"7\">Уссурийска</entity>, в районе <entity type=\"location\" local-id=\"9\">села Кроуновка </entity>на охотника напал тигр, пострадавший госпитализирован.</p>\r\n</div>\r\n                                                    <div></entity></sentence><sentence>Текст:\r\n                                            ГТРК \"Владивосток\"\r\n                                        </div>\r\n                \r\n                \r\n                <div>\r\n\r\n                    \r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n</data>\r\n\r\n</sentence><br><img src=\"https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D\"></scandoc>"
      },
      "entities": {
        "companies": [{
          "suggestedCompanies": [{
            "sparkId": 5752,
            "inn": "7710137066",
            "ogrn": "1037739169335",
            "searchPrecision": "maxPrecision"
          }],
          "resolveInfo": {
            "resolveApproaches": ["activeVerified"]
          },
          "tags": ["inBusinessNews"],
          "isSpeechAuthor": false,
          "localId": 0,
          "name": "Интерфакс Восток",
          "entityId": 132248549,
          "isMainRole": true
        }],
        "people": [],
        "themes": [{
          "localId": 1,
          "name": "Медицина и здоровье",
          "entityId": 10873126,
          "tonality": "negative"
        }, {
          "localId": 2,
          "name": "Медицина и здоровье",
          "entityId": 10873126,
          "tonality": "negative"
        }, {
          "localId": 3,
          "name": "Медицина и здоровье",
          "entityId": 10873126,
          "tonality": "negative"
        }, {
          "localId": 4,
          "name": "Следствие и расследования",
          "entityId": 8543420,
          "tonality": "neutral"
        }, {
          "localId": 5,
          "name": "Социальные вопросы: контекстный негатив",
          "entityId": 180643234,
          "tonality": "negative",
          "participant": {
            "localId": 0,
            "type": "company"
          }
        }],
        "locations": [{
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 6,
          "name": "Приморье",
          "isMainRole": true
        }, {
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 7,
          "name": "Уссурийск",
          "isMainRole": false
        }, {
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 8,
          "name": "село Яконовка",
          "isMainRole": false
        }, {
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 9,
          "name": "село Кроуновка",
          "isMainRole": false
        }]
      },
      "attributes": {
        "isTechNews": false,
        "isAnnouncement": false,
        "isDigest": false,
        "influence": 352.0,
        "wordCount": 99,
        "coverage": {
          "value": 1402211.0,
          "state": "hasData"
        }
      },
      "language": "russian"
    }
  }, {
    "ok": {
      "schemaVersion": "1.2",
      "id": "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw=",
      "version": 1,
      "issueDate": "2019-11-06T09:44:00+03:00",
      "url": "https://www.vesti.ru/doc.html?id=3206990",
      "source": {
        "id": 3264,
        "groupId": 8388638,
        "name": "Вести.Ru (vesti.ru)",
        "categoryId": 7,
        "levelId": 1
      },
      "dedupClusterId": "2596EE21",
      "title": {
        "text": "Медведь напал на охотника в Приморье",
        "markup": "<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence>Медведь напал на охотника в <entity type=\"location\" local-id=\"6\">Приморье</entity>\r\n<data>\r\n<div>    <div><p></sentence></scandoc>"
      },
      "content": {
        "markup": "<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence><entity type=\"theme\" local-id=\"1\"><entity type=\"theme\" local-id=\"5\">Медведь напал на жителя <entity type=\"location\" local-id=\"6\">Приморья</entity>, пострадавший госпитализирован, - сообщает \"Вести: Приморье\" со ссылкой на <entity type=\"company\" local-id=\"0\">\"Интерфакс-Дальний Восток\"</entity>. </entity></entity></sentence><sentence>Сотрудники полиции проводят проверку по факту инцидента, связанного с нападением медведя на жителя <entity type=\"location\" local-id=\"7\">Уссурийска </entity>в лесу, в окрестностях <entity type=\"location\" local-id=\"8\">села Яконовка</entity>. </sentence><sentence><entity type=\"theme\" local-id=\"2\">Пострадавшего госпитализировали в реанимационное отделение городской больницы.</p>\r\n\r\n<p></entity></sentence><sentence>По данным медиков, он прооперирован, сейчас его жизни ничто не угрожает. </sentence><sentence><entity type=\"theme\" local-id=\"4\">Полицейские установили, что у мужчины есть разрешение на охоту, оружие должным образом зарегистрировано. </entity></sentence><sentence>Обстоятельства случившегося выясняются.</p>\r\n\r\n<p></sentence><sentence><entity type=\"theme\" local-id=\"3\">Напомним, ранее сообщалось, что в минувшие выходные в окрестностях <entity type=\"location\" local-id=\"7\">Уссурийска</entity>, в районе <entity type=\"location\" local-id=\"9\">села Кроуновка </entity>на охотника напал тигр, пострадавший госпитализирован.</p>\r\n</div>\r\n                                                    <div></entity></sentence><sentence>Текст:\r\n                                            ГТРК \"Владивосток\"\r\n                                        </div>\r\n                \r\n                \r\n                <div>\r\n\r\n                    \r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n</data>\r\n\r\n</sentence><br><img src=\"https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D\"></scandoc>"
      },
      "entities": {
        "companies": [{
          "suggestedCompanies": [{
            "sparkId": 5752,
            "inn": "7710137066",
            "ogrn": "1037739169335",
            "searchPrecision": "maxPrecision"
          }],
          "resolveInfo": {
            "resolveApproaches": ["activeVerified"]
          },
          "tags": ["inBusinessNews"],
          "isSpeechAuthor": false,
          "localId": 0,
          "name": "Интерфакс Восток",
          "entityId": 132248549,
          "isMainRole": true
        }],
        "people": [],
        "themes": [{
          "localId": 1,
          "name": "Медицина и здоровье",
          "entityId": 10873126,
          "tonality": "negative"
        }, {
          "localId": 2,
          "name": "Медицина и здоровье",
          "entityId": 10873126,
          "tonality": "negative"
        }, {
          "localId": 3,
          "name": "Медицина и здоровье",
          "entityId": 10873126,
          "tonality": "negative"
        }, {
          "localId": 4,
          "name": "Следствие и расследования",
          "entityId": 8543420,
          "tonality": "neutral"
        }, {
          "localId": 5,
          "name": "Социальные вопросы: контекстный негатив",
          "entityId": 180643234,
          "tonality": "negative",
          "participant": {
            "localId": 0,
            "type": "company"
          }
        }],
        "locations": [{
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 6,
          "name": "Приморье",
          "isMainRole": true
        }, {
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 7,
          "name": "Уссурийск",
          "isMainRole": false
        }, {
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 8,
          "name": "село Яконовка",
          "isMainRole": false
        }, {
          "code": {
            "countryCode": "RUS",
            "regionCode": "05"
          },
          "localId": 9,
          "name": "село Кроуновка",
          "isMainRole": false
        }]
      },
      "attributes": {
        "isTechNews": false,
        "isAnnouncement": false,
        "isDigest": false,
        "influence": 352.0,
        "wordCount": 99,
        "coverage": {
          "value": 1402211.0,
          "state": "hasData"
        }
      },
      "language": "russian"
    }
  }]

  // Моки завершение
  
  // Observe activated!

  constructor() {
    makeAutoObservable(this);
  }

  // Экшены

  // Сеттеры авторизации

  setLogin = (login) => {
    this.login = login;
  }

  setPassword = (password) => {
    this.password = password;
  }

  setIsAuthLoading = (bool) => {
    this.isAuthLoading = bool;
  }

  setIsAuthError = (bool) => {
    this.isAuthError = bool;
  };

  // Сеттер лимитов

  setCompanyLimits = (used, limit) => {
    this.companiesInfo.used = used;
    this.companiesInfo.limit = limit;
  }

  // Сеттеры формы

  setInn = (inn) => {
    this.inn = inn;
  }

  setTonality = (ton) => {
    this.tonality = ton;
  }

  setLimit = (number) => {
    this.limit = number;
  }

  setStartDate = (date) => {
    this.startDate = date;
  }

  setEndDate = (date) => {
    this.endDate = date;
  }

  setSeachingFormChecks = (param) => {
    switch (param) {
      case "maxFullness":
        this.seachingFormChecks.maxFullness === false 
        ? this.seachingFormChecks.maxFullness = true
        : this.seachingFormChecks.maxFullness = false;
        break;
      case "inBusinessNews":
        this.seachingFormChecks.inBusinessNews === false 
        ? this.seachingFormChecks.inBusinessNews = true 
        : this.seachingFormChecks.inBusinessNews = false;
        break;
      case "onlyMainRole":
        this.seachingFormChecks.onlyMainRole === false 
        ? this.seachingFormChecks.onlyMainRole = true 
        : this.seachingFormChecks.onlyMainRole = false;
        break;
      case "onlyWithRiskFactors":
        this.seachingFormChecks.onlyWithRiskFactors === false 
        ? this.seachingFormChecks.onlyWithRiskFactors = true 
        : this.seachingFormChecks.onlyWithRiskFactors = false;
        break;
      case "isTechNews":
        this.seachingFormChecks.isTechNews === false 
        ? this.seachingFormChecks.isTechNews = true 
        : this.seachingFormChecks.isTechNews = false;
        break;
      case "isAnnouncement":
        this.seachingFormChecks.isAnnouncement === false 
        ? this.seachingFormChecks.isAnnouncement = true 
        : this.seachingFormChecks.isAnnouncement = false;
        break;
      case "isDigest":
        this.seachingFormChecks.isDigest === false 
        ? this.seachingFormChecks.isDigest = true 
        : this.seachingFormChecks.isDigest = false;
        break;
      default:
        break;
    }
  }

  // Cеттеры для суммарных результатов

  setSummaryResults = (results) => {
    this.summaryResults = results;
  };

  setSummaryDates = (dates) => {
    this.summaryDates = dates;
  }

  setSummaryAll = (all) => {
    this.summaryAll = all;
  }

  setSummaryRisks = (risks) => {
    this.summaryRisks = risks;
  }

  setSummaryArticles = (articles) => {
    this.summaryArticles = articles;
  }

  setIsSummaryAllowed = (bool) => {
    this.isSummaryAllowed = bool;
  }

  setIsSummaryLoading = (bool) => {
    this.isSummaryLoading = bool;
  }

  setIsSummaryError = (bool) => {
    this.isSummaryError = bool;
  }


  // Сеттер для ID публикаций

  setPublishIds = (ids) => {
    this.publishIds = ids;
  }

  // Cеттер для самих публикаций

  setPublish = (data) => {
    this.publishes = data;
  }

  // Авторизация

  getToken = () => {
    this.setIsAuthLoading(true);
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
          this.setIsAuthLoading(false);
        }
    })
    .catch((err) => {
      console.log(err.code);
      this.setIsAuthError(true);
      console.log(this.isAuthError);
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

  // Запрос сводки на конкретные даты

  getHistogram = () => {
    this.setIsSummaryLoading(true);
    // Для теста
    // console.log("ИНН: " + this.inn);
    // console.log("Тональность: " + this.tonality);
    // console.log("Лимит (пока в сеттер просто передаётся строчка из допустимых значений): " + this.limit);
    // console.log("Дата начала: " + this.startDate);
    // console.log("Дата начала: " + this.endDate);
    axios
    .post("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", {
      issueDateInterval: {
        startDate: this.startDate,
        endDate: this.endDate,
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: this.inn, //7710137066
              maxFullness: this.seachingFormChecks.maxFullness,
              inBusinessNews: this.seachingFormChecks.inBusinessNews,
            },
          ],
          onlyMainRole: this.seachingFormChecks.onlyMainRole,
          tonality: `${this.tonality}`,
          onlyWithRiskFactors: this.seachingFormChecks.onlyWithRiskFactors,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: this.seachingFormChecks.isTechNews,
        excludeAnnouncements: this.seachingFormChecks.isAnnouncement,
        excludeDigests: this.seachingFormChecks.isDigest,
      },
      similarMode: "duplicates",
      limit: this.limit,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    })
    .then((response) => {
      console.log(response);
      this.setSummaryResults(response);
      if(this.summaryResults.status === 200 && this.summaryResults.data !== [] && this.summaryResults.data.data[0] !== undefined) {
        this.setIsSummaryLoading(false);
      } else {
        this.setIsSummaryError(true);
        this.setIsSummaryLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // Запрос списка ID публикаций

  getPublishIds = () => {
    // для проверки
    // console.log(this.token);
    axios
    .post("https://gateway.scan-interfax.ru/api/v1/objectsearch", {
      issueDateInterval: {
        startDate: this.startDate,
        endDate: this.endDate,
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: this.inn, //7710137066
              maxFullness: this.seachingFormChecks.maxFullness,
              inBusinessNews: this.seachingFormChecks.inBusinessNews,
            },
          ],
          onlyMainRole: this.seachingFormChecks.onlyMainRole,
          tonality: `${this.tonality}`,
          onlyWithRiskFactors: this.seachingFormChecks.onlyWithRiskFactors,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: this.seachingFormChecks.isTechNews,
        excludeAnnouncements: this.seachingFormChecks.isAnnouncement,
        excludeDigests: this.seachingFormChecks.isDigest,
      },
      similarMode: "duplicates",
      limit: this.limit,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    })
    .then((response) => {
      let result = [];
      response.data.items.map((el) => {
        return result.push(el.encodedId);
      })
      this.setPublishIds(result);
      // this.publishIds.map((el) => {console.log(el)});
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // Получения первичных статей 

  getLessTenPublishes = () => {
    // для проверки
    // console.log(this.token); 
    axios.post("https://gateway.scan-interfax.ru/api/v1/documents", { 
      ids: this.publishIds
    })
      .then((response) => {
        // console.log(response.data);
        this.setPublish(response.data);
        // console.log(this.Publishes);
      })
      .catch((err) => {
        // console.log(err);
      })
  }

  getNextTenPublishes = (articles) => {
    // для проверки
    // console.log(this.token); 
    axios.post("https://gateway.scan-interfax.ru/api/v1/documents", { 
      ids: articles
    })
      .then((response) => {
        console.log(response.data);
        this.setPublish([...this.publishes, ...response.data]);
        // console.log(this.Publishes);
      })
      .catch((err) => {
        // console.log(err);
      })
  }

  // Интерсептор для того, чтобы херед не путался с датой (по рекомендации ментора)
  
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