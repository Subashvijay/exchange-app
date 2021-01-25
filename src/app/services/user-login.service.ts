import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }
  userEmail: string;
  username: string;
  islogedIn = new BehaviorSubject<boolean>(false);
  login(userEmail: string): boolean {
    this.userEmail = userEmail;
    this.islogedIn.next(true);
    return true;
  }
}
