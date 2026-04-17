"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function List({ city = "Toronto" }) {
  const router = useRouter();
  const [items] = useState([
    { id: 1, name: "Morning", description: "Good morning weather" },
    { id: 2, name: "Afternoon", description: "Afternoon forecast" },
    { id: 3, name: "Evening", description: "Evening weather" },
  ]);

  const API_KEY = "0b28609f10904e18aca4dc76c5d67bb7";
  const [hoverId, setHoverId] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const [weather, setWeather] = useState("Loading...");
  const [windspeed, setWindspeed] = useState("");
  const [snow, setSnow] = useState("");
  const [precip, setPrecip] = useState("");
  const [localTime, setLocalTime] = useState("");

  // Map city → timezone
  const timeZones = {
    Toronto: "America/Toronto",
    Tokyo: "Asia/Tokyo",
    Berlin: "Europe/Berlin",
  };

  const getLocalTime = () => {
    const tz = timeZones[city] || "America/Toronto";

    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return formatter.format(new Date());
  };



  const updateTimeHighlight = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setActiveId(1); // Morning
    } else if (hour >= 12 && hour < 18) {
      setActiveId(2); // Afternoon
    } else {
      setActiveId(3); // Evening
    }
  };

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
  }, []);

  return (
    <main style={{ fontFamily: "Arial" }} className="list-container">

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => {
          const isHovered = hoverId === item.id;
          const isActive = activeId === item.id;
          const isVisible = isHovered || isActive;

          return (
  <li
    key={item.id}
    onMouseEnter={() => setHoverId(item.id)}
    onMouseLeave={() => setHoverId(null)}
    style={{
      display: isVisible ? "block" : "none",
      backgroundColor: isHovered ? "#939393" : "#3d3d3d",
    }}
    className="list-item"
  >
              <strong style={{ fontSize: "20px" }}>{item.name}</strong>
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
    </main>
  );
}

export default List;