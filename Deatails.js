import List from "@/components/List.js";

export default function Details() {
  const cities = ["Toronto", "Tokyo", "Berlin"];

  return (
    <div style={{ padding: "20px" }}>
    

      {cities.map((city) => (
        <List key={city} city={city} />
      ))}
    </div>
  );
}