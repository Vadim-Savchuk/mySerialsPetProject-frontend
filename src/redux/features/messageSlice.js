import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
}

const messageSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        removeMessage: (state) => {
            state.messages.pop()
        },
        removeMessageHandler: (state, action) => {
            state.messages = state.messages.filter((message, index) => index !== action.payload)
        }
    },
});

export const { addMessage, removeMessage, removeMessageHandler } = messageSlice.actions;
export default messageSlice.reducer;