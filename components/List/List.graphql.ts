import { gql } from 'urql';

export const LIST = gql`
  query Spells {
    spells(limit: 10) {
      index
      casting_time
      range
      components
      duration
      name
      classes {
        name
      }
    }
  }
`;
