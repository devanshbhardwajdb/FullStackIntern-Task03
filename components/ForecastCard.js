// components/ForecastCard.js
import React from 'react';

const ForecastCard = ({ forecast }) => {
    if (!forecast) return null;

    return (
        <div className='flex flex-col rounded-xl bg-white/10 p-5 h-full'>
            <h1 className="text-2xl mt-5 font-bold mb-4 font-teachers text-white text-center">5 Days Forecast</h1>
            <div className="flex gap-4 max-lg:flex-col text-white ">
                {forecast.map((day, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg glassmorphism flex flex-col items-center">
                        <h3 className="text-xl font-bold">{day.date}</h3>
                        <img
                            src={`http:${day.icon}`}
                            alt={day.description}
                            className="w-16 h-16"
                        />
                        <p className="text-lg">Avg Temp: {day.temp}°</p>
                        <p className="text-lg">{day.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastCard;
