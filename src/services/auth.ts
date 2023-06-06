import { api } from './api'
import type { User } from '../lib/types'

export type UserData = Omit<User, 'id'>
type LoginResponse = User & { token: string }

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, UserData>({
            query: (userData) => ({
                url: '/auth/login',
                method: 'POST',
                body: userData,
            })
        }),
        register: builder.mutation<LoginResponse, UserData>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            })
        }),
        current: builder.query<LoginResponse, void>({
            query: () => ({
                url: '/auth/current',
                method: 'GET',
            })
        })
    })
})


export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi
export const { endpoints: { login, register, current } } = authApi