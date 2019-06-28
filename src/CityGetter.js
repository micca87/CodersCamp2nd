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
	
 weatherId = function(id) {
        console.log(id);
      
          if (id >=600 && id <=622){
              console.log("Śnieg");
			    this.generateData('data1', "Śnieg");
		  }
            else if (id == 800) {
                console.log("Czyste niebo");
                this.generateData('data1', "Czyste niebo");
			}
            else if (id >=801 && id <=805) {
                console.log("Lekkie zachmurzenie");
                this.generateData('data1', "Lekkie zachmurzenie");
			}
            else if (id >= 701 && id < 782) {
                console.log("Możliwa mgła");
                this.generateData('data1', "Możliwa mgła");
			}
            else if  (id >= 500 && id < 532) {
                console.log("Deszcz");
                this.generateData('data1', "Deszcz");
			}
            else if (id >= 300 && id < 322) {
                console.log("Mżawka");
                this.generateData('data1', "Mżawka");
			}
            else if  (id >= 200 && id < 233) {
                console.log("Burza");
			this.generateData('data1', "Burza");}
            else {
			console.log("Something went wrong.....");
			this.generateData('data1', "Something went wrong.....");}
        
    };
    clearContainer() {
        let container = document.getElementById('dataBox');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
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
            
				this.weatherId(response.data.weather[0].id); 
                this.generateList(response.data);

            })
            .catch(function (error) {
                console.log(error);
                let errMsg = document.createElement("div");
                errMsg.textContent = "Podano złą nazwę miasta...";
                document.getElementById('err').appendChild(errMsg);
            });

    }
    showDetails(data) {
        let m = document.getElementById("overall");
        m.classList.add("overallInUse");
        m.innerHTML = data;
        
    }
    generateData(x, content) {
        let data = document.createElement('p');
        data.id = x;
        data.innerHTML = content.toString();
        document.getElementById("dataBox").appendChild(data).addEventListener('click', () => {
            this.showDetails(content)
        }, false);;
    }

    generateList = function (data) {
        
        let tempDesc=data.main.temp-273.15;
        let num;
        function roundToTwo(tempDesc) {
            return num = +(Math.round(tempDesc + "e+2") + "e-2");
        }
        roundToTwo(tempDesc);
        this.generateData('data2', num);
        let data2 = document.getElementById('data2');
        data2.innerHTML = "Temperatura:  " + data2.innerHTML + " °C";

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

    
	
	
	
};




