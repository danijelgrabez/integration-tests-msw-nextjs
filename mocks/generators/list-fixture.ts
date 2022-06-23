/**
 * Example with graphql-codegen-typescript-fixtures
 */
import fixture from '../../generated/graphql-fixtures';

// NOTE: Autocomplete works for type, not for fields
export const spellFixture = fixture('Spell', (spell) => {
  spell.bla = 'daaaa'; // Note: Do not throw error
});
