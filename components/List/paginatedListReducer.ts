import type { Spell, SpellsQuery, SpellsQueryVariables } from '../../generated/graphql';

type Action =
  | {
      type: 'FETCH_MORE';
    }
  | {
      type: 'UPDATE_FETCH_VARIABLES';
      payload: {
        variables: SpellsQueryVariables;
      };
    }
  | { type: 'FETCH_SUCCESS'; payload: { items: Partial<Spell>[] } }
  | { type: 'FETCH_ERROR' };

interface State {
  fetching: boolean;
  items: Partial<Spell>[];
  variables: SpellsQueryVariables;
}

// Normalize incoming data
const mergeData = (a1: Partial<Spell>[], a2: Partial<Spell>[]) => {
  const res = [...a1];
  for (let i = 0; i < a2.length; i++) {
    if (!res.find((x) => x.index === a2[i].index)) {
      res.push(a2[i]);
    }
  }
  return res;
};

/**
 * paginatedListReducer
 */
export const paginatedListReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_MORE': {
      const {
        variables: { skip, limit },
      } = state;
      return {
        ...state,
        variables: {
          ...state.variables,
          skip: skip + limit,
        },
        fetching: true,
      };
    }
    case 'UPDATE_FETCH_VARIABLES': {
      return {
        items: [],
        variables: {
          ...action.payload.variables,
        },
        fetching: true,
      };
    }
    case 'FETCH_SUCCESS': {
      return {
        ...state,
        items: mergeData(state.items, action.payload.items),
        fetching: false,
      };
    }
    case 'FETCH_ERROR': {
      return {
        ...state,
        fetching: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
