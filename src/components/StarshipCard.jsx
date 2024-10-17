export default function StarshipCard({ starships }) {
  return (
    <>
      <li key={starships.name}>
        <p>
          <strong>{starships.name}</strong>
        </p>
        <p>Class: {starships.starship_class}</p>
        <p>Manufacturer: {starships.manufacturer}</p>
        <p>Model: {starships.model}</p>
      </li>
    </>
  );
}
