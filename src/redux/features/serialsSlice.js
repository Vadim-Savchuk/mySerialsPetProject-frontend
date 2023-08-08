import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { validationSerial } from '../../utils';

import axios from '../../utils/axios';

const initialState = {
    serials: [],
    status: null,
    message: null,
}

// Add serial
export const addSerial = createAsyncThunk(
    'serials/addSerial',
    async (newSerial, { rejectWithValue }) => {
        try {
            validationSerial(newSerial);

            const { data, status } = await axios.post('/serial/add', newSerial);

            if (status !== 200) {
                throw new Error('An error occurred, the addition of a new series was unsuccessful');
            }

            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

// Remove serial
export const removeSerial = createAsyncThunk(
    'serials/removeSerial',
    async (id, { rejectWithValue }) => {
        try {
            const { data, status } = await axios.delete(`/serial/${id}`, id);

            if (status !== 200) {
                throw new Error('An error occurred, the series could not be deleted');
            }

            return {
                id,
                data,
            };
        } catch (error) {
            return rejectWithValue('An error occurred, the series could not be deleted');
        }
    }
);

// Edit serial
export const editSerial = createAsyncThunk(
    'serials/editSerial',
    async (updatedSerial, { rejectWithValue }) => {
        try {
            const { data, status } = await axios.put(`/serial/${updatedSerial.id}`, updatedSerial);

            if (status !== 200) {
                throw new Error('An error occurred, the series could not be edited');
            }

            return data;
        } catch (error) {
            return rejectWithValue('An error occurred, the series could not be edited');
        }
    }
);

// Get my serials
export const getMySerials = createAsyncThunk(
    'serials/getMySerials',
    async (_, { rejectWithValue }) => {
        try {
            const { data, status } = await axios.get('/serial/all');

            if (status !== 200) {
                throw new Error('An error occurred, it was not possible to get serials');
            }

            return { serials: data };
        } catch (error) {
            return rejectWithValue('An error occurred, it was not possible to get serials');
        }
    }
);

export const serialsSlice = createSlice({
    name: 'serials',
    initialState,
    reducers: {},
    extraReducers: {
        // Add Serial
        [addSerial.pending]: (state) => {
            state.status = 'loading'
            state.message = null
        },
        [addSerial.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.message = action.payload?.message
            state.serials.unshift(action.payload.newSerial)
        },
        [addSerial.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = action.payload
        },
        // Remove Serial
        [removeSerial.pending]: (state) => {
            state.status = 'loading'
            state.message = null
        },
        [removeSerial.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.message = action.payload?.data.message
            state.serials = state.serials.filter(serial => serial._id !== action.payload.id)
        },
        [removeSerial.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = action.payload
        },
        // Edit Serial
        [editSerial.pending]: (state) => {
            state.status = 'loading'
            state.error = null
            state.message = null
        },
        [editSerial.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.message = action.payload?.message
            const index = state.serials.findIndex(serial => serial._id === action.payload._id);
            state.serials[index] = action.payload
        },
        [editSerial.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = action.payload
        },
        // Get my serials
        [getMySerials.pending]: (state) => {
            state.status = 'loading'
            state.message = null
        },
        [getMySerials.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.message = action.payload?.message
            state.serials = action.payload?.serials
        },
        [getMySerials.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = action.payload
        },
    }
});

export default serialsSlice.reducer;