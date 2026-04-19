import { useState } from "react";

export default function Main(){
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [celcius, setCelsius] = useState(true);
    const [error, setError] = useState(null);
    
    const API_KEY = "insert key here";
    
    const getWeather = async () => {
        if (!city) {
            setError("Please enter a city name.");
            setWeatherData(null);
            return;
        }
        try {
            const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`);
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                setError(null);
                setWeatherData(data.data[0]);
            } else {
                setError("City not found.");
                setWeatherData(null);
            }
        } catch (err) {
            setError("An error occurred while fetching weather data.");
            setWeatherData(null);
        }
    }

    const toggleUnit = () => {
        if (!weatherData) {
            return "";
        }

        return celcius ? (weatherData.temp * 9/5 + 32).toFixed(2) : weatherData.temp;
    }

    return(
        <main>
            <div className="search-container">
                <h2 className="text">Search for a city:</h2>
                <input
                    type="text"
                    value = {city}
                    onChange = {(e) => setCity(e.target.value)}
                />
                <button className="search-button" onClick = {getWeather}>Search</button>
                {error && <p className="error text">{error}</p>}
                {weatherData && (
                    <div className="weather-info">
                        <h2 className="text">{weatherData.city_name}</h2>
                        <p className="text">Condition:</p>
                        <h3 className="text">{weatherData.weather.description}</h3>
                        <p className="text">Temperature:</p>
                        <h3 className="text">{toggleUnit()}°{celcius ? "F" : "C"}</h3>
                        <button className="temp-toggle" onClick={() => setCelsius(!celcius)}>Toggle °C/°F</button>
                    </div>
                )}
                
            </div>
        </main>
    )
}