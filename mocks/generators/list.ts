/**
 * Example with test-data-bot and faker
 */
import { build, sequence, perBuild, oneOf } from '@jackfranklin/test-data-bot';
import { faker } from '@faker-js/faker';
// Note: We can use type from the query (SpellsQuery) → in that case builder naming might have to reflect that
import { Spell, SpellComponent, SpellFragment } from '../../generated/graphql';
import { buildTimes } from '../utils';

// Note: Modification will probably be required in some scenarios
type ModifiedSpell = Pick<
  SpellFragment,
  'index' | 'casting_time' | 'range' | 'components' | 'duration' | 'name' | 'classes'
>;

/**
 * Spell object mother
 */
export const spellBuilder = build<SpellFragment>({
  // NOTE: Autocomplete works
  fields: {
    // test: "TS should complain", // Note: TS complains as expected
    index: sequence((x) => `special-${x}`),
    casting_time: oneOf('1 action', '2 actions', '3 actions'), // Note: randomization
    range: '90 feet',
    components: [SpellComponent.V, SpellComponent.S, SpellComponent.M],
    duration: 'Instantaneous',
    // @ts-ignore used for POC (check the Network tab with MSW; this field will be filtered out)
    material: 'Example material',
    name: perBuild(() => faker.name.firstName()),
    classes: [
      {
        name: 'Wizard',
      },
    ],
  },
});

export const mockedListItemName = 'AAAAAcid Splash';

/**
 * Manual mock
 * Note: Simplest approach, reliable enough
 */
export const generateList = (): ModifiedSpell[] => [
  {
    // "a": "aaa", // Note: TS will complain (same if we remove the field). We only have to consider how strict are our type on Quokka layer
    index: 'acid-splash',
    casting_time: '1 action',
    range: '60 feet',
    components: [SpellComponent.V, SpellComponent.S],
    duration: 'Instantaneous',
    name: mockedListItemName,
    classes: [
      {
        name: 'Sorcerer',
      },
      {
        name: 'Wizard',
      },
    ],
  },
  {
    index: 'acid-arrow',
    casting_time: '1 action',
    range: '90 feet',
    components: [SpellComponent.V, SpellComponent.S, SpellComponent.M],
    duration: 'Instantaneous',
    name: 'Acid Arrow',
    classes: [
      {
        name: 'Wizard',
      },
    ],
  },
  {
    index: 'aid',
    casting_time: '1 action',
    range: '30 feet',
    components: [SpellComponent.V, SpellComponent.S, SpellComponent.M],
    duration: '8 hours',
    name: 'Aid',
    classes: [
      {
        name: 'Cleric',
      },
      {
        name: 'Paladin',
      },
    ],
  },
  {
    index: 'alarm',
    casting_time: '1 minute',
    range: '30 feet',
    components: [SpellComponent.V, SpellComponent.S, SpellComponent.M],
    duration: '8 hours',
    name: 'Alarm',
    classes: [
      {
        name: 'Ranger',
      },
      {
        name: 'Wizard',
      },
    ],
  },
  {
    index: 'alter-self',
    casting_time: '1 action',
    range: 'Self',
    components: [SpellComponent.V, SpellComponent.S],
    duration: 'Up to 1 hour',
    name: 'Alter Self',
    classes: [
      {
        name: 'Sorcerer',
      },
      {
        name: 'Wizard',
      },
    ],
  },
  {
    index: 'animal-friendship',
    casting_time: '1 action',
    range: '30 feet',
    components: [SpellComponent.V, SpellComponent.S, SpellComponent.M],
    duration: '24 hours',
    name: 'Animal Friendship',
    classes: [
      {
        name: 'Bard',
      },
      {
        name: 'Cleric',
      },
      {
        name: 'Druid',
      },
      {
        name: 'Ranger',
      },
    ],
  },
  {
    index: 'animal-messenger',
    casting_time: '1 action',
    range: '30 feet',
    components: [SpellComponent.V, SpellComponent.S, SpellComponent.M],
    duration: '24 hours',
    name: 'Animal Messenger',
    classes: [
      {
        name: 'Bard',
      },
      {
        name: 'Druid',
      },
      {
        name: 'Ranger',
      },
    ],
  },
  {
    index: 'animal-shapes',
    casting_time: '1 action',
    range: '30 feet',
    components: [SpellComponent.V, SpellComponent.S],
    duration: 'Up to 24 hours',
    name: 'Animal Shapes',
    classes: [
      {
        name: 'Druid',
      },
    ],
  },
  {
    index: 'animate-dead',
    casting_time: '1 minute',
    range: '10 feet',
    components: [SpellComponent.V, SpellComponent.S, SpellComponent.M],
    duration: 'Instantaneous',
    name: 'Animate Dead',
    classes: [
      {
        name: 'Cleric',
      },
      {
        name: 'Wizard',
      },
    ],
  },
  {
    index: 'animate-objects',
    casting_time: '1 action',
    range: '120 feet',
    components: [SpellComponent.V, SpellComponent.S],
    duration: 'Up to 1 minute',
    name: 'Animate Objects',
    classes: [
      {
        name: 'Bard',
      },
      {
        name: 'Sorcerer',
      },
      {
        name: 'Wizard',
      },
    ],
  },
];

// Note: Approach with more abstraction
export const buildListWithTenItems = () => [
  spellBuilder({ overrides: { name: mockedListItemName } }),
  ...buildTimes(spellBuilder, 9),
];
