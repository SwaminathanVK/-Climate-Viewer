// src/context/WeatherContext.jsx
import { createContext, useState, useContext } from 'react';
import axios from 'axios';


const WeatherContext = createContext();
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setError('');
    } catch (err) {
      console.log(err.response?.data);
      setWeather(null);
      setError('City not found!');
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
