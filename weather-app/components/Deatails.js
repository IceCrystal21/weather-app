import List from "@/components/List.js";

export default function Details() {
  const cities = ["Toronto", "Tokyo", "Berlin"];

  return (
    <div className="details">
      <h2 className="text">Major Cities</h2>
      <div className="list-container">
        {cities.map((city) => (
            <List key={city} city={city} />
          ))}
      </div>
    </div>
    
  );
}