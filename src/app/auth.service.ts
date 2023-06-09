import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  //Sign up with email and password
  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }
}
