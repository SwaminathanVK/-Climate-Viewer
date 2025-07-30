// src/App.jsx
import { useState } from 'react';
import { useWeather } from './Context/WeatherContext.jsx';
import { useTheme } from './Context/ThemeContext.jsx';
import WeatherCard from './Components/WeatherCard.jsx';

function App() {
  const [city, setCity] = useState('');
  const { fetchWeather, weather, error } = useWeather();
  const { dark, setDark } = useTheme();

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">🌦️ Weather Dashboard</h1>
        <button
          onClick={() => setDark(!dark)}
          className="btn btn-outline-secondary"
        >
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
