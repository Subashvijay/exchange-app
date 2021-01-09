import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  carasaImgSrc: string[] = [
    '944',
    '110',
    '1000',
    '900'
  ]
  ngOnInit(): void {
  }

}
