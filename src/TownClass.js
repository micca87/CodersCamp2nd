import axios from 'axios';

const apiLink = 'http://api.openweathermap.org/data/2.5/weather?q=';

export default class Town {
    constructor(city, countryShortcut, apiKey) {
        this.city = city;
        this.countryShotcut = countryShortcut;
        this.apiKey = apiKey;
    }

//stworzenie nowego linka z kilku składowych pobieranych z konstruktora.
// W wyniku działania funkcji createLink() otrzymamy taki link:
// http://api.openweathermap.org/data/2.5/weather?q=Wroclaw,pl&APPID=0b72f178992e5ddc7fa93b511b4a5dff
    createLink() {
        let link = `${apiLink}${this.city},${this.countryShotcut}&APPID=${this.apiKey}`;
        return link;
    }

    getJSONfromAPI() {
        return axios.get(this.createLink());
    }
};

