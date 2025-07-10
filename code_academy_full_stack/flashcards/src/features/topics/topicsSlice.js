import { createSlice } from "@reduxjs/toolkit"; 

export const topicsSlice = createSlice({
    name: 'topicsSlice',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload
        }
    }
})