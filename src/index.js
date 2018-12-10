import Town from "./TownClass";

let city = new Town('Wrocław', 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
city.createLink();
city.getJSONfromAPI().then(function (response) {
    let weatherDesc 
	let weat = response.data.weather[0].description;
        switch (weat) {
            case "clear sky":
                weatherDesc = "czyste niebo";
                break;
            case "few clouds":
                weatherDesc = "lekkie zachmurzenie";
                break;
            case "scattered clouds":
                weatherDesc = "rozproszone ";
                break;
            case "broken clouds":
                weatherDesc = "zachmurzenie";
                break;
            case "shower rain", "light rain":
                weatherDesc = "lekkie opady";
                break;
            case "rain":
                weatherDesc = "pada";
                break;
            case "thunderstorm":
                weatherDesc = "burza";
			default :
				weatherDesc = "hgfhg";
		}
	
    ;


    let tempDesc = (response.data.main.temp - 273.15);
    let pressureDesc = response.data.main.pressure;
    let humidityDesc = response.data.main.humidity;
    let cloudsDesc = response.data.clouds.all;
    let windDesc = response.data.wind.speed;

    console.log(weatherDesc);
    console.log(tempDesc);
    console.log(pressureDesc);
    console.log(humidityDesc);
    console.log(cloudsDesc);
    console.log(windDesc);
    console.log(response);
    document.getElementById("message1").innerHTML="Dzisiaj: " + weatherDesc;
    document.getElementById("message2").innerHTML = "Tempereatura: " + tempDesc + " °C";
    document.getElementById("message3").innerHTML= "Cisnienie: " + pressureDesc + " hPa";
    document.getElementById("message4").innerHTML = "Wilgotność: " + humidityDesc + " %";
    document.getElementById("message5").innerHTML = "Zachmurzenie: " + cloudsDesc + " %";
    document.getElementById("message6").innerHTML = "Prędkość wiatru: " + windDesc + " m/s";

});




