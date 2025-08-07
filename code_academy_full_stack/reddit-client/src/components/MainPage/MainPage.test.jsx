import * as React from 'react';
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('MainPage', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('Renders MainPage component', async () => {
        await React.act(async () => {
          renderWithReduxAndRouter('/');
        })
    })

    it('Updates posts shown based on a user query', async () => {
        const exampleJson = {
            "data": {
                "children": {
                    "kind": "t3",
                    "data": {}
                }
            }
        }
    })
})