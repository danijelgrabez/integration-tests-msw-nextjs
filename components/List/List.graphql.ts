import { gql } from 'urql';

// Intentionally omit fields that are required by the GQL type
// Used as a POC for mocks/generators/fragment-tailored-generators/README.md
const SPELL_DC_FRAGMENT = gql`
  fragment SpellDc on SpellDc {
    desc
    type {
      full_name
    }
  }
`;

const SPELL_FRAGMENT = gql`
  fragment Spell on Spell {
    index
    casting_time
    range
    components
    duration
    name
    classes {
      name
    }
    dc {
      ...SpellDc
    }
  }

  ${SPELL_DC_FRAGMENT}
`;

export const Spells = gql`
  query Spells($limit: Int!, $skip: Int!) {
    spells(limit: $limit, skip: $skip) {
      ...Spell
    }
    ${SPELL_FRAGMENT}
  }
`;
