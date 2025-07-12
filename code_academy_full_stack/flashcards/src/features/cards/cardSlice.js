import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
})

export const selectCard = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;