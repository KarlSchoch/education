import * as React from 'react';
import { render, screen } from "@testing-library/react";
import Banner from './Banner'

describe('MainPage', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('Contains search bar component', async () => {
        // Setup
        // Exercise
        render(<Banner />)
        // Verify
        expect( screen.queryByTestId('search-box') ).toBeInTheDocument()
        // Teardown
    })
})