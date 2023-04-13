import { buildListWithTenItems, generateList, spellBuilder } from '../generators/list';
import isEqual from 'lodash.isequal';
import { buildTimes } from '../utils';
import { filter } from 'graphql-anywhere';
import { SpellFragment, SpellFragmentDoc } from '../../generated/graphql';

const variableCases = [
  { limit: 10, skip: 0 },
  { limit: 10, skip: 10 },
  { limit: 10, skip: 20 },
  { limit: 10, skip: 30 },
];

export const spells = (req: any, res: any, ctx: any) => {
  // NOTE: Passing Jest test
  // return res(ctx.delay(100), ctx.data({ spells: buildListWithTenItems() }));

  // Note: More complex resolver
  // TODO: Demonstrate other scenarios that we might encounter in our application
  for (let scenario of variableCases) {
    if (isEqual(scenario, req.variables)) {
      const nineSpellsWithFilteredProps = buildTimes(spellBuilder, 9).map((obj) =>
        filter<SpellFragment>(SpellFragmentDoc, obj)
      );

      const spells = [
        filter(
          SpellFragmentDoc,
          spellBuilder({
            overrides: { name: `First item (skip param: ${scenario.skip})` },
          })
        ),
        ...nineSpellsWithFilteredProps,
      ];

      return res(
        ctx.delay(100),
        ctx.data({
          spells,
        })
      );
    }
  }

  // NOTE: Default scenario (or error handling, etc.)
  return res(
    ctx.delay(100),
    ctx.errors([
      {
        message: 'MSW Error response',
        errorType: 'AuthenticationError',
      },
    ])
  );
};
