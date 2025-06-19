import React, { useState, useEffect } from 'react';
import WeatherInfo from './weatherInfo';


export default function WeatherCard() {
    const [city, setCity] = useState("Lagos");
    const [input, setInput] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const apiKey = "c53fe5a9c2e8c0e89314a994847d5efc";

    const currentDate = new Date().toLocaleDateString("en-GB", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            setError("Please enter a city name.");
            return;
        }
        setCity(input.trim());
        setInput("");
        setError("");
    };

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
                );
                const data = await res.json();
                console.log(data);
                if (res.ok) {
                    setWeather({
                        icon: data.weather[0].icon,
                        temp: `${Math.round(data.main.temp)}°C`,
                        condition: data.weather[0].main,
                    });
                } else {
                    setError(data.message || "City not found.");
                }
            } catch (err) {
                setError("Failed to fetch weather data.");
            }
        };

        fetchWeather();
    }, [city]);


    return (
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md ">
            <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>

            {/* Search Bar */}
            <div className="mb-6">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Enter city..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Search
                    </button>
                </form>
                {error && <p className="text-red-400 text-sm text-center mb-2">{error}</p>}
            </div>

            {/* City & Date Info */}
            {weather && (
                <WeatherInfo
                    city={city}
                    date={currentDate}
                    icon={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                    temp={weather.temp}
                    condition={weather.condition}

                />
            )}

        </div>
    );
};
