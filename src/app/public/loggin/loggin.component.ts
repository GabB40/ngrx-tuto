import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styles: [
  ]
})
export class LogginComponent implements OnInit {

  isLoggedIn!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn = false;
  }

  onConnect(loggIn = true) {
    this.isLoggedIn = loggIn;
  }

}
