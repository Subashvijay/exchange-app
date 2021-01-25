import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLoginService } from '../../../services/user-login.service';
@Component({
  selector: 'app-log-in-sign-up',
  templateUrl: './log-in-sign-up.component.html',
  styleUrls: ['./log-in-sign-up.component.scss']
})
export class LogInSignUpComponent implements OnInit {

  constructor(private userLoginService: UserLoginService, private router: Router) { }

  loginform: FormGroup;
  loading = false;
  isLoged: boolean;
  subscriptions: Subscription;
  ngOnInit(): void {
    this.subscriptions = this.userLoginService.islogedIn.subscribe((x) => {
      if (x) {
        this.router.navigate(['home']);
      }
    }
    );
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(): void {
    if (this.loginform.valid) {
      this.loading = true;
      setTimeout(() => {
        this.userLoginService.login(this.loginform.get('email').value);
        this.router.navigate(['home']);
      }, 3000);
    }
  }
}
