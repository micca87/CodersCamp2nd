import axios from 'axios';

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';

export default class CityGetter {
    constructor(city, countryShortcut, apiKey) {
        this.city = city;
        this.countryShotcut = countryShortcut;
        this.apiKey = apiKey;

    }

    createLink() {
        let link = `${apiLink}${this.city},${this.countryShotcut}&APPID=${this.apiKey}`;
        return link;
    }

    getJSONfromAPI() {
        return axios.get(this.createLink());
    }

    weather = function (data) {
		let weatherOverall = data.weather.id;
        console.log("showWeaherDesc");
        switch (data) {
            case 803:
                console.log("Czyste niebo");
                this.generateData('data1', "Czyste niebo");
                break;
            case 801 >= weatherOverall < 805:
                console.log("Lekkie zachmurzenie");
                this.generateData('data1', "Lekkie zachmurzenie");
                break;
            case 701 >= weatherOverall< 782:
                console.log("Możliw mgła");
                this.generateData('data1', "Możliwa mgła");
                break;
            case 600 >= weatherOverall < 623:
                console.log("Śnieg");
                this.generateData('data1', "Śnieg");
                break;
            case 500 >= weatherOverall < 532:
                console.log("Deszcz");
                this.generateData('data1', "Deszcz");
                break;
            case 300 >= weatherOverall < 322:
                console.log("Mżawka");
                this.generateData('data1', "Mżawka");
                break;
            case  200 >= weatherOverall < 233:
                console.log("Burza");
                this.generateData('data1', "Burza");
            default :
			console.log("fdsfsdf");
			this.generateData('data1', "fdsfsdf");
        }
    };

    searchBtn() {
        this.clearContainer();
        if (document.getElementById("err").firstChild) {
            console.log("Error was here");
            let errorBox = document.getElementById("err").firstChild;
            errorBox.remove();
        }

        console.log("Search btn clicked");

        let show = document.querySelector('#citySearch').value;

        console.log(show);

        this.getJSONfromAPI()
            .then((response) => {
                console.log(response);
                this.weather(response.data.weather[0].description);
                this.generateList(response.data);

            })
            .catch(function (error) {
                console.log(error);
                let errMsg = document.createElement("div");
                errMsg.textContent = "Podano złą nazwę miasta...";
                document.getElementById('err').appendChild(errMsg);
            });

    }

    generateData(x, content) {
        let data = document.createElement('p');
        data.id = x;
        data.innerHTML = content.toString();
        document.getElementById("dataBox").appendChild(data);
    }

    generateList = function (data) {
        let tempDesc = data.main.temp - 273.15;
        this.generateData('data2', tempDesc);
        let data2 = document.getElementById('data2');
        data2.innerHTML = "Tempereatura:  " + data2.innerHTML + " °C";

        let pressureDesc = data.main.pressure;
        this.generateData('data3', pressureDesc);
        let data3 = document.getElementById('data3');
        data3.innerHTML = 'Ciśnienie: ' + data3.innerHTML + " hPa";

        let humidityDesc = data.main.humidity;
        this.generateData('data4', humidityDesc);
        let data4 = document.getElementById('data4');
        data4.innerHTML = 'Wilgotność: ' + data4.innerHTML + " %";

        let cloudsDesc = data.clouds.all;
        this.generateData('data5', cloudsDesc);
        let data5 = document.getElementById('data5');
        data5.innerHTML = 'Zachmurzenie nieba: ' + data5.innerHTML + " %";

        let windDesc = data.wind.speed;
        this.generateData('data6', windDesc);
        let data6 = document.getElementById('data6');
        data6.innerHTML = 'Prędkość wiatru: ' + data6.innerHTML + " m/s";

    };

    clearContainer() {
        let container = document.getElementById('dataBox');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
	
	
	
	 doMagic() {
        let m = document.getElementById("overall");
        m.firstChild.nodeValue = p.textContent;
    }
    getDataListAndShowMagic() {
        let magic = document.getElementByTagName('p');
        magic.addEventListener('click', this.doMagic)
    }
	
	
};




