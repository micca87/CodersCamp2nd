import ExampleClass from "./exampleClass";

let example = new ExampleClass('Wroclaw', 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
example.createLink();
example.getJSONfromAPI().then(function (response) {
    let weatherDesc =response.data.weather[0].description;
    console.log(weatherDesc);
    console.log(response);
    document.getElementById("message").innerHTML="Todays weather is " + weatherDesc;
});
