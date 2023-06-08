import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import logs from './slices/logsSlice'
import { api } from '../services/api'
import { listenerMidlleware } from '../middleware/auth'

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
        logs,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).prepend(listenerMidlleware.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>


export default store