import * as React from 'react';
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('Main Page', () => {
    it('Renders MainPage component', () => {
        renderWithReduxAndRouter('/');
    })
})