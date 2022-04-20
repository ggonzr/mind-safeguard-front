/**
 * Slice to persist data related to each prediction answer
 */

import { createSlice } from '@reduxjs/toolkit'

export const predictionSlice = createSlice({
    name: 'prediction',
    initialState: null,
    reducers: {
        setPrediction: (state, action) => {
            return action.payload
        }
    },
});

// Export actions
export const { setPrediction } = predictionSlice.actions;

// Selectors
export const retrievePrediction = (state) => state.prediction;

// Export reducer
export default predictionSlice.reducer;


