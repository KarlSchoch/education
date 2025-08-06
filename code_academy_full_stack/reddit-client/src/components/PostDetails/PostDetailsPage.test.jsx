import * as React from 'react';
import { screen, waitFor } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';
import sampleSinglePageJSON from '../../assets/api-data/sample-single-page-data.json'
import successSinglePageJSON from '../../assets/api-data/success-single-page-data.json'

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

    it('Renders PostDetails component with successful API Call', async () => {
        // Setup
        global.fetch = jest.fn((url) => {
            if (url.includes('/api/reddit/r/tragedeigh/comments/1m2adlq.json')) {
                return Promise.resolve({
                    ok: true,
                    status: 200, 
                    headers: {
                        get: () => 'application/json',
                    },
                    json: () => Promise.resolve(successSinglePageJSON),
                    text: () => Promise.resolve(JSON.stringify(successSinglePageJSON)),
                })
            }
            console.log("Encountered unexpected URL", url)
        })

        // Exercise
        // await React.act(async () => {
        //     renderWithReduxAndRouter('/post/1m2adlq');
        // })
        renderWithReduxAndRouter('/post/1m2adlq');

        // Verify
        await waitFor(() => {
            // 1. Fetch warning is not there
            expect( screen.queryByTestId('comment-fetch-warning') ).not.toBeInTheDocument();
            // 2. Comments are present
            expect( screen.queryAllByTestId('comment-class') ).not.toHaveLength(0);
        }, {timeout: 3000})

        // Teardown
    })
})