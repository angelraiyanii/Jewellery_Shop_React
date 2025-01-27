import axios from 'axios';
//const API_KEY = "6a406f62f0b1d920202870756bb8edf0";
const API_KEY = "843520248abcec172dd7200ccaedb117";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

