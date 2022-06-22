import React, { ReactNode } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Client, Provider } from 'urql';
import { delay, fromValue, pipe } from 'wonka';
import { List } from './';
import { generateList } from '../../mocks/generators/list';
import { client } from '../../pages/_app';
import { graphql } from 'msw';
import { spells } from '../../mocks/queries/spells';

const delayed = (data: any, duration = 0) => pipe(fromValue(data), delay(duration));

const StoryWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const urqlMock = {
    executeQuery: () =>
      delayed(
        {
          data: { spells: generateList() },
        },
        1000
      ),
  } as unknown as Client;

  return (
    <>
      <em>Note: Server response is simulated via mocked Urql provider.</em>
      <Provider value={urqlMock}>{children}</Provider>
    </>
  );
};

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: Story = (args) => (
  <StoryWrapper>
    <List />
  </StoryWrapper>
);

export const Default = Template.bind({});

export const MSWDefault = () => (
  <>
    <em>Note: Server response is simulated via MSW.</em>
    <Provider value={client}>
      <List />
    </Provider>
  </>
);

MSWDefault.parameters = {
  msw: {
    handlers: [graphql.query('Spells', spells)],
  },
};
