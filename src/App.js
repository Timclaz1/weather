import WeatherCard from "./components/weatherCard";
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 text-white flex items-center justify-center p-4">
      <WeatherCard />
    </div>
  );
}
