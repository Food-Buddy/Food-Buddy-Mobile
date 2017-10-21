import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
    constructor(private fireAuth: AngularFireAuth) { }

    handleErrors(error: any) {
        console.log(error);
    }

    login(user: User) {
        return this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .catch((error: any) => this.handleErrors(error));
    }

    signUp(user: User): Promise<any> {
        return this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .catch((error: any) => this.handleErrors(error));
    }

}
