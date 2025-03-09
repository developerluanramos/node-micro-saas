export default interface User {
    id?: Number;
    name: string;
    email: string;
    password?: string;
    active: boolean;
}