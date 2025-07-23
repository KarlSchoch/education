import * as React from 'react';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from './src/app/store';
import AppRoutes from './src/app/AppRoutes';

export const renderWithReduxAndRouter = (route= '/') => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>
    </Provider>);
}