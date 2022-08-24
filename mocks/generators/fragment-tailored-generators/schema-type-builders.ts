import { build } from '@jackfranklin/test-data-bot';
import { AbilityScore, Class, DcSuccess, Skill, SpellDc } from '../../../generated/graphql';

const abilityScoreBuilder = build<AbilityScore>({
  fields: {
    __typename: 'AbilityScore',
    desc: ['A', 'B', 'C'],
    full_name: 'Full name of the ability builder',
    index: 'index',
    name: 'Name',
    skills: [],
  },
});

// Build a spell based on main GQL type
export const spellDcBuilder = build<SpellDc>({
  fields: {
    __typename: 'SpellDc',
    desc: 'Example description',
    success: DcSuccess.Half,
    type: abilityScoreBuilder(),
  },
});
