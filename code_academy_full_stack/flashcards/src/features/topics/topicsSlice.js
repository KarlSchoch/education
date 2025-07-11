import { createSlice } from "@reduxjs/toolkit"; 

const topicsSlice = createSlice({
    name: 'topicsSlice',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                ...action.payload,
                quizIds: []
            }
        },
        addQuizToTopic: (state, action) => {
            // receives quiz payload {id:str, name:str, topicId:str, cardIds:list}
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
        }
    }
})

export const selectTopics = (state) => state.topics.topics
export const { addTopic, addQuizToTopic } = topicsSlice.actions
export default topicsSlice.reducer