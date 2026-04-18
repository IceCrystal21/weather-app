"use client";
import { useState, useEffect } from "react";

function List({ city = "Toronto" }) {
  const [items] = useState([
    { id: 1, name: "Morning", description: "Good morning weather" },
    { id: 2, name: "Afternoon", description: "Afternoon forecast" },
    { id: 3, name: "Evening", description: "Evening weather" },
  ]);

  const API_KEY = "0b28609f10904e18aca4dc76c5d67bb7";

  const [hoverId, setHoverId] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const [weather, setWeather] = useState("Loading...");
  const [windspeed, setWindspeed] = useState(0);
  const [snow, setSnow] = useState(0);
  const [precip, setPrecip] = useState(0);
  const [localTime, setLocalTime] = useState("");

  const timeZones = {
    Toronto: "America/Toronto",
    Tokyo: "Asia/Tokyo",
    Berlin: "Europe/Berlin",
  };

  const getLocalTime = () => {
    const tz = timeZones[city] || "America/Toronto";

    return new Date().toLocaleTimeString("en-CA", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: tz,
    });
  };

  function updateTimeHighlight() {
    const tz = timeZones[city] || "America/Toronto";

    const hour = Number(
      new Date().toLocaleString("en-US", {
        hour: "2-digit",
        hour12: false,
        timeZone: tz,
      })
    );

    setLocalTime(getLocalTime());

    if (hour >= 5 && hour < 12) {
      setActiveId(1);
    } else if (hour >= 12 && hour < 18) {
      setActiveId(2);
    } else {
      setActiveId(3);
    }
  }

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
        );

        const data = await response.json();
        const info = data.data[0];

        setWeather(`${info.temp}°C - ${info.weather.description}`);
        setWindspeed(info.wind_spd || 0);
        setSnow(info.snow || 0);
        setPrecip(info.precip || 0);
      } catch (error) {
        setWeather("Weather unavailable");
      }
    }

    getWeather();
    updateTimeHighlight();

    const interval = setInterval(updateTimeHighlight, 60000);

    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className="list-card">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => {
          const isHovered = hoverId === item.id;
          const isActive = activeId === item.id;
          const isVisible = isHovered || isActive;

          return (
            <li
              key={item.id}
              onMouseEnter={() => setHoverId(item.id)}
              onMouseLeave={() => setHoverId(null)}
              className="list-item"
              style={{
                display: isVisible ? "block" : "none",
                backgroundColor: isHovered ? "#939393" : "#3d3d3d",
              }}
            >
              <h2>{city}</h2>
              <strong>{item.name}</strong>

              <p>Local Time: {localTime}</p>
              <p>{item.description}</p>
              <p>{weather}</p>

              {windspeed > 0 && <p>Wind: {windspeed} m/s</p>}
              {snow > 0 && <p>Snow: {snow} mm</p>}
              {precip > 0 && <p>Rain: {precip} mm</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;