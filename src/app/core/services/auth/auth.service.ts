import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { Auth } from 'aws-amplify';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticationSubject = new BehaviorSubject<boolean>(false);

  public isLoggedIn$: Observable<boolean> = this.authenticationSubject.asObservable();

  constructor(private router: Router) {
    Amplify.configure({
      Auth: environment.cognito,
    });
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password).then(() => {
      this.authenticationSubject.next(true);
      this.router.navigate(['/dashboard']);
    });
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
        .then((user: any) => {
          if (user) {
            return true;
          } else {
            return false;
          }
        })
        .catch(() => {
          return false;
        });
    }
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public getSession(): Promise<any> {
    return Auth.currentSession();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser().then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }
}
