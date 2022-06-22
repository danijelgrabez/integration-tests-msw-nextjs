import { useSpellsQuery } from '../../generated/graphql';

export const List = () => {
  const [result] = useSpellsQuery();

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <h1>Results</h1>
      <ul>
        {data?.spells.map((spell) => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul>
    </>
  );
};
