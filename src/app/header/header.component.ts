import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserLoginService) { }
  isLoged: boolean;
  ngOnInit(): void {
    this.userService.islogedIn.subscribe(x => this.isLoged = x);
  }

}
