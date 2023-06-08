 export type ErrorWithMessage = {
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

export type Log = {
   id: string
   firstName: string
   lastName: string 
   address: string
   age: string
   createdAt?: unknown
   userId: string
   user?: User
}