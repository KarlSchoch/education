import * as React from 'react';
import { screen } from "@testing-library/react";
import sampleSearchResults from './assets/api-data/sample-search-results-data.json'
import { renderWithReduxAndRouter } from '../test-utils';

describe('App root', () => {

    const originalFetch = global.fetch;
    afterEach(() => {
        jest.restoreAllMocks();
        global.fetch = originalFetch;
    });
    
    it('Displays a post title from the provided search response', async () => {
        // Setup
        // Mock query so that it
        jest.spyOn(global, 'fetch').mockImplementation((url) => {
            if (url.includes('/api/reddit/search.json?q=Celtics')) {
                return Promise.resolve({
                    ok: true,
                    status: 200,
                    headers: {
                        get: () => 'application/json',
                    },
                    json: () => Promise.resolve(sampleSearchResults),
                    text: () => Promise.resolve(JSON.stringify(sampleSearchResults))
                })
            }
            console.log('Unexpected url called', url)
            return Promise.reject(new Error('Network down'));

        })

        // Exercise
        // Render SearchBar and pull in interactive elements
        renderWithReduxAndRouter('/')
        const input = screen.getByTestId('search-input');
        const button = screen.getByTestId('submit-btn');
        // Simulate user typing a search term and clicking submit
        fireEvent.change(input, {target: {value: 'Celtics'}})
        fireEvent.click(button)

        // Verify
        // 1. Element from the sample search response is there
        await waitFor(() => {
            expect(
                screen.getByText(sampleSearchResults.data.children[0].title)
            ).toBeInTheDocument();
        })

        // Teardown
    })
})