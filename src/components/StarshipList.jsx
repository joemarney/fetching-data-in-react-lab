import StarshipCard from "./StarshipCard";

export default function StarshipList(props) {
  // const searchResults = props.starships.filter((result) => {
  //   return result.name === props.filter;
  // });
  return (
    <section>
      <h2>Starships</h2>
      <p>Results: {props.starships.length}</p>
      <ul>
        {props.starships.map((starship) => {
          return <StarshipCard key={starship.name} starships={starship} />;
        })}
      </ul>
    </section>
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

// {props.filter ? (
//   <section>
//     <ul>
//       {searchResults.map((results, index) => {
//         return <StarshipCard key={index} starships={results} />;
//       })}
//     </ul>
//   </section>
// ) : (
//   <section>
//     <ul>
//       {props.starships.map((results, index) => {
//         return <StarshipCard key={index} starships={results} />;
//       })}
//     </ul>
//   </section>
// )}
