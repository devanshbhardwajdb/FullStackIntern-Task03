// components/WeatherCard.js
import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    const {
        temp,
        temp_min,
        temp_max,
        humidity,
        wind_speed,
        wind_deg,
        description,
        icon
    } = weather;


    return (
        <div className='flex flex-col rounded-xl bg-white/10 p-5'>
            <h1 className="text-2xl mt-5 font-bold mb-4 font-teachers text-white text-center">Current Weather</h1>
            <div className="bg-white p-4 rounded-lg shadow-lg glassmorphism text-white ">
                <div className="flex items-center mb-4">
                    <img
                        src={`http:${icon}`}
                        alt={description}
                        className="w-16 h-16"
                    />
                    <div className="ml-4">
                        <h2 className="text-2xl font-bold">{description}</h2>
                        <p className="text-lg">Temp: {temp}°</p>
                        <p className="text-lg">Min Temp: {temp_min}°</p>
                        <p className="text-lg">Max Temp: {temp_max}°</p>
                        <p className="text-lg">Humidity: {humidity}%</p>
                        <p className="text-lg">Wind Speed: {wind_speed} m/s</p>
                        <p className="text-lg">Wind Direction: {wind_deg}°</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
