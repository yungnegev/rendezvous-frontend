 export type Error = {
    status: number
    data: {
        message: string
    }
 }

 export type User = {
    id: string
    email: string
    name: string
    password: string
    logs: unknown[]
 }