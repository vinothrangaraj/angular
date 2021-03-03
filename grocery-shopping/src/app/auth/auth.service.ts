import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get name() {
    return this.userName.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.userName.next(user.userName);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
