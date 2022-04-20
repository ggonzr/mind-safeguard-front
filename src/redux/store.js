// Store config file
import { configureStore } from '@reduxjs/toolkit'
import questionSlice from "./features/question/questionSlice";
import predictionSlice from "./features/prediction/predictionSlice";

export const store = configureStore({
    reducer: {
        question: questionSlice,
        prediction: predictionSlice
    }
})