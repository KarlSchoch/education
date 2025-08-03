import * as React from 'react';
import { screen, waitFor } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('PostDetails', () => {
    const originalFetch = global.fetch
    afterEach(() => {
        jest.restoreAllMocks();
        global.fetch = originalFetch;
    });
    
    it('Includes error message if unable to ', async () => {
        // Setup
        jest.spyOn(global, 'fetch').mockImplementation((...args) => {
            return Promise.reject(new Error('Network down'));
        });

        // Exercise
        renderWithReduxAndRouter('/post/1m2adlq');

        // Verify
        // 1. Warning is present
        expect(await screen.findByTestId('comment-fetch-warning')).toBeInTheDocument()
        // 2. No comments are present
        await waitFor(() => {
            expect( screen.queryByTestId('comment-class') ).not.toBeInTheDocument();
        }, {timeout: 3000})

        // Teardown
    })

    // it('Renders PostDetails component with successful API Call ', async () => {
    //     // Setup

    //     // Exercise
    //     await React.act(async () => {
    //         renderWithReduxAndRouter('/post/1m2adlq');
    //     })

    //     // Verify
    //     // 1. Fetch warning is not there
    //     // 2. Comments are present

    //     // Teardown
    // })
})