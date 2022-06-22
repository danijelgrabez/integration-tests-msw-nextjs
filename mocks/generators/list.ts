export const mockedListItemName = 'AAAAAcid Splash';

export const generateList = () => [
  {
    index: 'acid-splash',
    casting_time: '1 action',
    range: '60 feet',
    components: ['V', 'S'],
    duration: 'Instantaneous',
    name: mockedListItemName,
    classes: [
      {
        name: 'Sorcerer',
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Wizard',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Paladin',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Wizard',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Wizard',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Cleric',
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Druid',
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Ranger',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Druid',
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Ranger',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Wizard',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
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
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Sorcerer',
        __typename: 'AbilityScoreSkills',
      },
      {
        name: 'Wizard',
        __typename: 'AbilityScoreSkills',
      },
    ],
    __typename: 'Spell',
  },
];
