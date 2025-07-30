import * as React from 'react';
import { screen, waitFor } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';
import successMainpageJson from '../../assets/api-data/success-main-page-data.json';

describe('Posts', () => {
    const originalFetch = global.fetch
    afterEach(() => {
        jest.restoreAllMocks();
        global.fetch = originalFetch;
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
            await screen.findByText('Drones being used to indicate exit for an event in Osaka, Japan')
        ).toBeInTheDocument();
        
        // Teardown (included in afterEach)
    })

    it('displays posts invoked from the API', async () => {
        // Setup
        global.fetch = jest.fn((url) => {
            if (url.includes('/api/reddit/r/popular.json')) {
                return Promise.resolve({
                    ok: true,
                    status: 200,
                    headers: {
                        get: () => 'application/json',
                    },
                    json: () => Promise.resolve(successMainpageJson),
                    text: () => Promise.resolve(JSON.stringify(successMainpageJson)),
                });
            }
        });

        // Exercise
        renderWithReduxAndRouter('/');

        // Verify
        // 1. Fetch warning is not there
        await waitFor(() => {
            expect(screen.queryByTestId('post-fetch-warning')).not.toBeInTheDocument();
        }, {timeout: 3000})
        // 2. Find text contained in the success main page
        expect(
            await screen.findByText("A guy wanted to adopt a cat, but he wouldn't leave his brother's side, so he had to take both of them.")
        ).toBeInTheDocument()

        // Teardown (included in afterEach)
    })
})