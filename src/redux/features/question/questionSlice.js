/**
 * Slice to persist data related to each question answered
 * by the user
 */

import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
    name: 'question',
    initialState: {},
    reducers: {
        register: (state, action) => {
            // Payload dictionary: {Q#: {Q#A: <int>, Q#E: <float>}}
            const key = Object.keys(action.payload)[0];
            const value = action.payload[key];
            // Assign the answer
            state[key] = value
        }
    },
})

// Export actions
export const { register } = questionSlice.actions;

// Selectors
export const selectQuestion = (state, questionKey) => state.question[questionKey];

// Export slice reducers as default
export default questionSlice.reducer;