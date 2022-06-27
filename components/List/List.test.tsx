import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'urql';
import { client } from '../../pages/_app';
import '@testing-library/jest-dom';

import { List } from './index';
import { mockedListItemName } from '../../mocks/generators/list';

// NOTE: When resolver mocks are adjusted, some tests might fail.
// Consider if this is a good thing.
describe('List', () => {
  it.skip('renders List', async () => {
    render(
      <Provider value={client}>
        <List />
      </Provider>
    );

    screen.getByText(/Loading/i);

    await waitFor(() => {
      screen.getByText('Results');
      screen.getByText(mockedListItemName);
    });
  });

  it('renders List', async () => {
    render(
      <Provider value={client}>
        <List />
      </Provider>
    );

    screen.getByText(/Loading/i);

    await waitFor(() => {
      screen.getByText('Results');
      screen.getByText('First item (skip param: 0)');
    });
  });
});
