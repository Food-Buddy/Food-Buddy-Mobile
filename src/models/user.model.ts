export interface User {
    name: string,
    email: string,
    password: string,
    passwordRepeat: string,
    address: Address
}

export interface Address {
    no: string,
    street: string
    area: string,
    landmark: string
}