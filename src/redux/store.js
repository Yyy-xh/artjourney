import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './slices/commentsSlice';

const store = configureStore({
    reducer: {
        comments: commentsReducer,
    },
});

export default store;
