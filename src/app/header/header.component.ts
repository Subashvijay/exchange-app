import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserLoginService) { }
  navScrollitems = [
    { name: 'Grocery', icon: 'fa-shopping-cart', active: false },
    { name: 'Mobile', icon: 'fa-mobile-alt', active: false },
    { name: 'Book', icon: 'fa-book', active: false },
    { name: 'Mens', icon: 'fa-male', active: false },
    { name: 'Women', icon: 'fa-female', active: false },
    { name: 'Headphones', icon: 'fa-headphones-alt', active: false },
    { name: 'Telivision', icon: 'fa-tv', active: false },
    { name: 'Sports', icon: 'fa-baseball-ball', active: false },

  ];
  isLoged: boolean;
  ngOnInit(): void {
    this.userService.islogedIn.subscribe(x => this.isLoged = x);
  }


  navScrollClick(i: number): void {
    this.navScrollitems.forEach((x, i: number) => { this.navScrollitems[i].active = false; });
    this.navScrollitems[i].active = true;
  }

}
