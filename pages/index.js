import { useState } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import { toast } from 'react-toastify';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Replace with your WeatherAPI key

const IndexPage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    setError('');
    try {
      // Fetch current weather
      const weatherResponse = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      setWeather({
        temp: unit === 'metric' ? weatherResponse.data.current.temp_c : weatherResponse.data.current.temp_f,
        temp_min: unit === 'metric' ? weatherResponse.data.current.temp_c : weatherResponse.data.current.temp_f, // WeatherAPI does not provide min/max in the current endpoint
        temp_max: unit === 'metric' ? weatherResponse.data.current.temp_c : weatherResponse.data.current.temp_f,
        humidity: weatherResponse.data.current.humidity,
        wind_speed: unit === 'metric' ? weatherResponse.data.current.wind_kph : weatherResponse.data.current.wind_mph,
        wind_deg: weatherResponse.data.current.wind_degree,
        description: weatherResponse.data.current.condition.text,
        icon: weatherResponse.data.current.condition.icon
      });

      // Fetch 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
      );
      const forecastData = forecastResponse.data.forecast.forecastday.map(day => ({
        date: new Date(day.date).toLocaleDateString(),
        temp: unit === 'metric' ? day.day.avgtemp_c : day.day.avgtemp_f,
        description: day.day.condition.text,
        icon: day.day.condition.icon
      }));
      setForecast(forecastData);
    } catch (error) {
      toast.error('You entered a wrong city name');
      setWeather(null); // Clear weather data on error
      setForecast([]); // Clear forecast data on error
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-16 items-center font-teachers bg min-h-[100vh] w-full">
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold mb-4 font-teachers text-white">Weather Forecast</h1>
        <form className='flex w-1/2 items-center justify-center' onSubmit={handleSearch}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="border p-2 rounded outline-none focus:shadow-[#9B03F8] shadow-sm focus:border-[#9B03F8]"
          />
          <button
            className="bg_button text-white p-2 rounded ml-2"
            type='submit'
          >
            Search
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
            className="bg-gray-200 p-2 rounded"
          >
            Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
          </button>
        </div>
      </div>
      <div className="mt-4 flex max-lg:flex-col items-center justify-center gap-5 w-full">
        {weather && <WeatherCard weather={weather} />}
        {forecast.length > 0 && <ForecastCard forecast={forecast} />}
      </div>
    </div>
  );
};

export default IndexPage;
