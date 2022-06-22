import { build, sequence, perBuild } from '@jackfranklin/test-data-bot';
import { faker } from '@faker-js/faker';
import { Class, Spell } from '../../generated/graphql';
import { buildTimes } from '../utils';

// Note: Modification will probably be required
type ModifiedSpell = Pick<
  Spell,
  'index' | 'casting_time' | 'range' | 'components' | 'duration' | 'name' | 'classes'
>;

/**
 * Spell object mother
 */
export const spellBuilder = build<ModifiedSpell>({
  fields: {
    index: sequence((x) => `special-${x}`),
    casting_time: '1 action',
    range: '90 feet',
    components: ['V', 'S', 'M'],
    duration: 'Instantaneous',
    name: perBuild(() => faker.name.firstName()),
    classes: [
      {
        name: 'Wizard',
      },
    ],
  },
});

export const buildListWithThreeItems = () => buildTimes(spellBuilder, 3);

export const mockedListItemName = 'AAAAAcid Splash';

/**
 * Manual mock
 */
export const generateList = (): ModifiedSpell[] => [
  {
    // "a": "aaa", // Note: TS will complain (same if we remove the field). We only have to consider how strict are our type on Quokka layer
    index: 'acid-splash',
    casting_time: '1 action',
    range: '60 feet',
    components: ['V', 'S'],
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
    components: ['V', 'S', 'M'],
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
    components: ['V', 'S', 'M'],
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
    components: ['V', 'S', 'M'],
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
    components: ['V', 'S'],
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
    components: ['V', 'S', 'M'],
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
    components: ['V', 'S', 'M'],
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
    components: ['V', 'S'],
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
    components: ['V', 'S', 'M'],
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
    components: ['V', 'S'],
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
