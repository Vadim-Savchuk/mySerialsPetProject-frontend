import { configureStore } from '@reduxjs/toolkit';

import authSlice    from './features/authSlice';
import messageSlice from './features/messageSlice';
import serialsSlice from './features/serialsSlice';
import themaSlice   from './features/themaSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        serials: serialsSlice,
        messages: messageSlice,
        thema: themaSlice
    }
});

export default store;