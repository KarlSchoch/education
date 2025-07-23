import * as React from 'react';
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('MainPage', () => {
    it('Renders MainPage component', () => {
        renderWithReduxAndRouter('/');
    })
    // If you get an error, tell the user you are displaying cached results
    it('Warns user about API call error', () => {
        renderWithReduxAndRouter('/');
    })
})