import { UserType } from "./usertype";

export class User{
    public ime: string = '';
    public prezime: string = '';
    public username: string = '';
    public password: string = '';
    public adresa: string = '';
    public userType: UserType = new UserType;
}