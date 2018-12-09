import Town from "./TownClass";

let city = new Town('Wroclaw', 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
city.createLink();
city.getJSONfromAPI().then(function (response) {
    let weatherDesc 
        switch (response.data.weather[0].description) {
            case response.data.weather[0].description === "clear sky":
                console.log ("czyste niebo");
                break;
            case response.data.weather[0].description === "few clouds":
                console.log("lekkie zachmurzenie");
                break;
            case response.data.weather[0].description === "scattered clouds":
                console.log("rozproszone");
                break;
            case "broken clouds":
                console.log("zachmurzenie");
                break;
            case response.data.weather[0].description === "shower rain":
                console.log("mrzawka");
                break;
            case response.data.weather[0].description === "rain":
                console.log("pada");
                break;
            case response.data.weather[0].description === "thunderstorm":
                console.log("burza");
				default :
				console.log("hgfhg");
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
    document.getElementById("message1").innerHTML="Todays weather is " + weatherDesc;
    document.getElementById("message2").innerHTML = "Tempereatura " + tempDesc + " °C";
    document.getElementById("message3").innerHTML= "Cisnienie " + pressureDesc + " hPa";
    document.getElementById("message4").innerHTML = "Wilgotność " + humidityDesc + " %";
    document.getElementById("message5").innerHTML = "Zachmurzenie " + cloudsDesc + " %";
    document.getElementById("message6").innerHTML = "Prędkość wiatru " + windDesc + " m/s";

});
