import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teams: [],
    drivers: [],
    searchedDrivers: [],
    filterDrivers: [],
    filters: {
        from: '',
        order: '',
        team: '',
    }
};

export const driversSlice = createSlice({
    name: 'drivers',
    initialState,
    reducers: {
        addDriver: (state,action) => {
            state.drivers.push(action.payload);
        },
        getDrivers: (state,action) => {
            state.drivers = action.payload;
        },
        getTeams: (state,action) => {
            state.teams = action.payload;
        },
        getSearchedDrivers: (state, action) => {
            state.searchedDrivers = action.payload
        },
        getFilterDrivers: (state, action) => {
            state.filterDrivers = action.payload
        },
        changeFilters: (state,action) => {
            state.filters = action.payload
        },
    }
})

export const {getDrivers, getTeams, addDriver, getSearchedDrivers, changeFilters, getFilterDrivers} = driversSlice.actions;
export default driversSlice.reducer;