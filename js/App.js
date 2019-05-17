const searchForm = document.querySelector('.search');
const card = document.querySelector('.card');
const content = document.querySelector('.card__content');
const timeImage = document.querySelector('.card__img');
const timeIcon = document.querySelector('.icon');

const updateUI = (data) => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    const {cityDets , weather} = data;

    content.innerHTML = `
    <h4 class="card__city--name">${cityDets.EnglishName}</h4>
    <div class="card__condition">${weather.WeatherText}</div>
    <div class="temp">
        <span class="card__temp">${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;


    // update the weather images and icons
    let Icon = `../img/icons/${weather.WeatherIcon}.svg`;
    timeIcon.setAttribute('src',Icon);
    
    let timeSrc = null;
    if(weather.IsDayTime) {

        timeSrc = '../img/day.svg';
    }else {

        timeSrc = '../img/night.svg';
    }

    timeImage.setAttribute('src', timeSrc);

}

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
      cityDets,
      weather    
    };
    
}


    
searchForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const cityName = searchForm.city.value.trim();
    searchForm.reset(); 

    updateCity(cityName).then(data => updateUI(data))
    .catch(error => console.log(error)
    );

});
