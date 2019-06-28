import CityGetter from "./CityGetter";





document.getElementById('click').addEventListener("click",searchBtn);

function searchBtn() {
    let show = document.querySelector('#citySearch').value;
    let newCityLink = new CityGetter(show, 'pl', '2b015ae385f2913ad8f1589439742845');
    newCityLink.searchBtn();

}

