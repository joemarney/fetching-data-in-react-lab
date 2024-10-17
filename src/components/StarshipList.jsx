import StarshipCard from "./StarshipCard";

export default function StarshipList(props) {
  const searchResults = props.starships.filter((result) => {
    return result.name === props.filter;
  });
  return (
    <>
      {props.filter ? (
        <section>
          <ul>
            {searchResults.map((results) => {
              return <StarshipCard key={results.name} starships={results} />;
            })}
          </ul>
        </section>
      ) : (
        <section>
          <ul>
            {props.starships.map((results) => {
              return <StarshipCard key={results.name} starships={results} />;
            })}
          </ul>
        </section>
      )}
    </>
  );
}
// <section>
//   {props.starships.length === 0 ? (
//     <p>No starships found.</p>
//   ) : (
//     <>
//       <p>Results: {props.starships.length}</p>
//       <ul>
//         <StarshipCard starships={props.starships} />
//       </ul>
//     </>
//   )}
// </section>
