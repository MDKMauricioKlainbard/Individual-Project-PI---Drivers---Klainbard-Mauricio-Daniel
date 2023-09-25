import {configureStore} from '@reduxjs/toolkit';
import driversReducer from './driversSlice.js';

export const store = configureStore({
    reducer: {
        drivers: driversReducer,
    }
})
