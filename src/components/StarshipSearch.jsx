import { useState } from "react";

export default function StarshipSearch(props) {
  const [starship, setStarship] = useState("");

  const handleInput = (e) => {
    setStarship(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // await props.fetchData(starship);
    props.setSearchTerm(starship);
    setStarship("");
  };

  return (
    <>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Enter: </label>
        <input id="starship" type="text" name="starship" value={starship} onChange={handleInput} />
        <button type="submit">Go</button>
      </form>
    </>
  );
}
