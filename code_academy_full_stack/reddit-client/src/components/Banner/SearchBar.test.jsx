import * as React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from './SearchBar'

describe('Search Bar', () => {

    it('Allows user to type and submit search terms', async () => {
        // Setup
        const handleSubmit = jest.fn();
        
        // Exercise
        // Render the SearchBar and pull in interactive elements
        render(<SearchBar onSubmit={handleSubmit} />)
        const input = screen.getByTestId('search-input');
        const button = screen.getByTestId('submit-btn');
        // Simulate user typing a search term and clicking submit
        fireEvent.change(input, {target: {value: 'Celtics'}})
        expect(input.value).toBe('Celtics');
        fireEvent.click(button)


        // Verify
        // On submit, handler gets called with the input text and the input box gets cleared
        expect(handleSubmit).toHaveBeenCalledWith('Celtics');
        expect(input.value).toBe('');
        
        // Teardown
    })
})