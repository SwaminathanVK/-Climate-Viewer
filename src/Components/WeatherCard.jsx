// src/components/WeatherCard.jsx
const WeatherCard = ({ weather }) => {
    return (
      <div className="card text-center mx-auto mt-4 shadow" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h5 className="card-title fs-3">
            {weather.name}, {weather.sys.country}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
          <p className="card-text fs-5 text-capitalize">{weather.weather[0].description}</p>
          <p className="fs-1 fw-bold">{Math.round(weather.main.temp)}°C</p>
          <div className="d-flex justify-content-around mt-3">
            <small>Humidity: {weather.main.humidity}%</small>
            <small>Wind: {weather.wind.speed} m/s</small>
          </div>
        </div>
      </div>
    );
  };
  
export default WeatherCard;
  