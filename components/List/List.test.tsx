import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'urql';
import { client } from '../../pages/_app';
import '@testing-library/jest-dom';

import { List } from './index';
import { mockedListItemName } from '../../mocks/generators/list';

describe('List', () => {
  it('renders List', async () => {
    const { debug } = render(
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
});
