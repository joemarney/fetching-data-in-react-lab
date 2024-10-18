// IMPORTS
import { index, show } from "./services/StarshipService";
import { useState, useEffect } from "react";

// COMPONENTS
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";

// FUNCTION
const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const showShips = async () => {
      const data = await index();
      setStarships(data.results);
    };
    showShips();
  }, []);

  const search = async (searchTerm) => {
    const data = await show(searchTerm);
    setStarships(data.results);
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch search={search} />
      <StarshipList starships={starships} />
    </>
  );
};

export default App;

// const fetchData = async (starship) => {
//   const data = await show(starship);
//   setSearchTerm({
//     name: data.name,
//     class: data.starship_class,
//     manufacturer: data.manufacturer,
//     model: data.model,
//   });
//   console.log(searchTerm);
// };
/* <ul>
  {Object.values(searchTerm).map((value, i) => {
    return (
      <section key={i}>
        <p>
          <strong>{value}</strong>
        </p>
      </section>
    );
  })}
</ul> */
