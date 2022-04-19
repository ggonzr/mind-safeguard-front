// Store config file
import { configureStore } from '@reduxjs/toolkit'
import questionSlice from "./features/question/questionSlice";

export const store = configureStore({
    reducer: {
        question: questionSlice
    }
})