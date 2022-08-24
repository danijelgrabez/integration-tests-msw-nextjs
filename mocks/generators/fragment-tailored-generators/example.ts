import { toValidator, mapper } from './utils';
import { spellDcBuilder } from './schema-type-builders';
import { SpellDc, SpellDcFragment, SpellDcFragmentDoc } from '../../../generated/graphql';

// The whole GQL type
export const spellDc = spellDcBuilder();

// AST to validator (used for picking the expected fields based on fragment, or query)
const validator = toValidator(SpellDcFragmentDoc);

export const finalFixture = mapper<SpellDc, SpellDcFragment>(spellDc, validator[0]);
