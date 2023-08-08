import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    thema: window.localStorage.getItem('thema') || 'light',
}

const themaSlice = createSlice({
    name: 'thema',
    initialState,
    reducers: {
        handlerThema: (state, action) => {
            state.thema = action.payload
            window.localStorage.setItem('thema', action.payload);
        }
    }
});

export const { handlerThema } = themaSlice.actions;
export default themaSlice.reducer; 