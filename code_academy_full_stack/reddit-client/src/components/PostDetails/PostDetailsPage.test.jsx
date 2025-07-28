import * as React from 'react';
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('PostDetails', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    
    it('Renders PostDetails component', async () => {
        await React.act(async () => {
            renderWithReduxAndRouter('/post/1m2adlq');
        })
    })
})