import * as React from 'react';
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('PostDetails', () => {
    it('Renders PostDetails component', () => {
        renderWithReduxAndRouter('/post/123');
    })
})