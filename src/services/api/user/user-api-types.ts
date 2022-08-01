export type CreateUserDto = {
    fullName: string
} & LoginDto
export type LoginDto = {
    email: string
    password: string
}

export type ResponseUserType = {
    access_token: string,
    create: string,
    email: string,
    fullName: string,
    id: number
    update: string,
    password:string
}

export interface ResponseUserMeType{
    password: string
}

