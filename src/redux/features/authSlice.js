import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { validationRegister, validationLogin, validationEditName } from '../../utils';

import axios from '../../utils/axios';

const initialState = {
    user: null,
    token: null,
    status: null,
    message: null,
}

// Register user
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (newUser, { rejectWithValue }) => {
        try {
            validationRegister(newUser);

            const { data, status } = await axios.post('/auth/register', newUser);

            if (status !== 200) {
                throw new Error('An error occurred, the server is not working. Please try again later');
            }

            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }

            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
)

// Login user
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            validationLogin(userData)

            const { data, status } = await axios.post('/auth/login', userData);

            if (status !== 200) {
                throw new Error('An error occurred, the server is not working. Please try again later');
            }

            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }

            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
)

// Get user
export const getUser = createAsyncThunk(
    'auth/getUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data, status } = await axios.get('/auth/me');

            if (status !== 200) {
                throw new Error('An error occurred, the server is not working. Please try again later');
            }

            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('An error occurred, the server is not working. Please try again later');
        }
    }
)

// Update user
export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async (updateUser, { rejectWithValue }) => {
        try {
            validationEditName(updateUser);

            const { data, status } = await axios.patch('/auth/update', updateUser);

            if (status !== 200) {
                throw new Error('An error occurred, the server is not working. Please try again later');
            }

            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.status = null
            state.message = null
        }
    },
    extraReducers: {
        // Register user
        [registerUser.pending]: (state) => {
            state.status = 'loading'
            state.message = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.user = action.payload.newUser
            state.token = action.payload.token
            state.message = action.payload?.message
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = action.payload
        },
        // Login user
        [loginUser.pending]: (state) => {
            state.status = 'loading'
            state.message = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.user = action.payload.user
            state.token = action.payload.token
            state.message = action.payload?.message
        },
        [loginUser.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = action.payload
        },
        // Update user
        [updateUser.pending]: (state) => {
            state.status = 'loading'
            state.message = null
        },
        [updateUser.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.user = action.payload.user
            state.message = action.payload?.message
        },
        [updateUser.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = action.payload
        },
        // Get user
        [getUser.pending]: (state) => {
            state.status = 'loading'
            state.message = null
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.user = action.payload?.user
            state.token = action.payload?.token
            state.message = action.payload?.message
        },
        [getUser.rejected]: (state, action) => {
            state.status = 'rejected'
            state.messsage = action.payload
        }
    }
});

export const checkIsAuth = (state) => {
    return Boolean(state.auth.token);
}

export const { logout } = authSlice.actions;
export default authSlice.reducer;