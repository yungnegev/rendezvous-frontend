import { api } from './api'
import type { Log } from '../lib/types'


export const logApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllLogs: builder.query<Log[], void>({
            query: () => ({
                url: '/logs',
                method: 'GET'
            })
        }),
        getLog: builder.query<Log, string>({
            query: (id) => ({
                url: `/logs/${id}`,
                method: 'GET'
            })
        }),
        editEmployee: builder.mutation<string, Log>({
            query: (log) => ({
                url: `/logs/${log.id}`,
                method: 'PUT'
            })
        }),
        removeLog: builder.mutation<string, string>({
            query: (id) => ({
                url: `/logs/${id}`,
                method: 'DELETE',
                body: { id }
            })
        }),
        createLog: builder.mutation<Log, Log>({
            query: (log) => ({
                url: '/logs',
                method: 'POST',
                body: log
            })
        })
    })
})

export const {
    useGetAllLogsQuery,
    useGetLogQuery,
    useEditEmployeeMutation,
    useRemoveLogMutation,
    useCreateLogMutation,
} = logApi

export const {
    endpoints: {
        getAllLogs,
        getLog,
        editEmployee,
        removeLog,
        createLog,
    }
} = logApi