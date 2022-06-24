import { useEffect, useReducer } from 'react';
import { useSpellsQuery } from '../../generated/graphql';
import { paginatedListReducer } from './paginatedListReducer';

const LIMIT = 10;

export const List = () => {
  const [{ fetching, items, variables }, dispatch] = useReducer(paginatedListReducer, {
    variables: { limit: LIMIT, skip: 0 },
    items: [],
    fetching: true,
  });
  const [{ data, error }] = useSpellsQuery({
    variables: variables,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      dispatch({ type: 'FETCH_ERROR' });
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'FETCH_SUCCESS', payload: { items: data?.spells || [] } });
    }
  }, [data]);

  if (fetching && items.length === 0) return <p>Loading...</p>;
  if (error && items.length === 0) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <h1>Results</h1>
      <ul>
        {items.map((spell) => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'FETCH_MORE' })} disabled={error ? true : false}>
        {fetching ? 'Loading more spells' : 'Load more'}
      </button>
      {error && <p>Oh no... {error.message}</p>}
    </>
  );
};
