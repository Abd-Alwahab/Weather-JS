const API_KEY = 'pEPeoOBEvGSjJV9Fcim0qDMACMXCsCRO';

// get the weather for the city 
const getWeather = async (cityKey) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${API_KEY}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}


// get the city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${API_KEY}&q=${city}`;
    const response = await fetch(base + query);
    const date = await response.json();
    return date[0];
    
}

