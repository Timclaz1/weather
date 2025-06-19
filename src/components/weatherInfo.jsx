import React from 'react';

const WeatherInfo = ({ city, date, icon, temp, condition }) => {
    return (
        <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">{city}</h2>
            <p className="text-sm text-gray-200">{date}</p>

            <div className="flex flex-col items-center space-y-2 mt-4">
                {/* Weather Icon */}
                <img
                    src={icon}
                    alt="Weather Icon"
                    className="w-24 h-24 transition-transform duration-300 hover:scale-105"
                />

                {/* Temperature */}
                <h3 className="text-4xl font-bold">{temp}</h3>

                {/* Weather Condition */}
                <p className="text-lg text-gray-100">{condition}</p>
            </div>
        </div>
    );
};

export default WeatherInfo;
