import { createSlice } from '@reduxjs/toolkit';
import { Log } from '../../lib/types';
import { logApi } from '../../services/logs';
import { RootState } from '../store';



interface InitialState {
    logs: Log[] | null
}

const initialState: InitialState = {
    logs: null
}

const slice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(logApi.endpoints.getAllLogs.matchFulfilled, (state, action) => {
                state.logs = action.payload
            })
    }
})

export default slice.reducer
export const selectLogs = (state: RootState) => state.logs