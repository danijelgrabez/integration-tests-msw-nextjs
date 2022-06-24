import { gql } from 'urql';

export const Spells = gql`
  query Spells($limit: Int!, $skip: Int!) {
    spells(limit: $limit, skip: $skip) {
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
