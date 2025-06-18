import React from 'react';


export default function weatherCard() {
    return (
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md ">
            <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>

            {/* Search Bar */}
            <div className="mb-6">
                <form className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Enter city..."
                        className="flex-1 p-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* City & Date Info */}
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">Lagos, NG</h2>
                <p className="text-sm text-gray-200">Monday, 17 June 2025</p>
            </div>
            {/* Weather Info */}
            <div className="flex flex-col items-center space-y-2">
                {/* Weather Icon */}
                <img
                    src="https://openweathermap.org/img/wn/03d@4x.png"
                    alt="Weather Icon"
                    className="w-24 h-24"
                />

                {/* Temperature */}
                <h3 className="text-4xl font-bold">27°C</h3>

                {/* Weather Condition */}
                <p className="text-lg text-gray-100">Cloudy</p>
            </div>

        </div>
    );
};
