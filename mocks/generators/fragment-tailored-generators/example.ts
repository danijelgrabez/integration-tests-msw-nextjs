import { filter } from 'graphql-anywhere';
import { spellDcBuilder } from './schema-type-builders';
import { SpellDcFragmentDoc } from '../../../generated/graphql';

// The whole GQL type
export const spellDc = spellDcBuilder();

export const finalFixture = filter(SpellDcFragmentDoc, spellDc);
