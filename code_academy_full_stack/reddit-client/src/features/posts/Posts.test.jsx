import * as React from 'react';
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('Posts', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('Warns user about API Call error - Main Page', async () => {
        // Setup
        jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network down'));
        
        // Exercise
        renderWithReduxAndRouter('/');
        
        // Verify
        // 1. Display warning to user about cached content
        expect(await screen.findByTestId('post-fetch-warning')).toBeInTheDocument();
        // 2. Display cached content
        expect(
            await screen.findByText(/'my friend \(28F\) is about eight months pregnant'/i)
        ).toBeInTheDocument();
        
        // Teardown (included in afterEach)
    })
})