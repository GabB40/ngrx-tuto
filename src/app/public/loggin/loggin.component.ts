import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styles: [
  ]
})
export class LogginComponent implements OnInit {

  isLoggedIn!: boolean;
  userIdentifiant!: string;
  userPassword!: string;
  errorMsg: string = '';

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn = false;
    this.userIdentifiant = this.userPassword = 'JohnDoe';
  }

  onConnect(loggIn = true) {
    this.errorMsg = '';
    if (loggIn) {
      if (this.userIdentifiant && this.userPassword) {
        this.isLoggedIn = loggIn;
      } else this.errorMsg = 'Identifiant et mot de passe requis';
    }
    else {
      this.userIdentifiant = this.userPassword = '';
      this.isLoggedIn = loggIn;
    }
  }

}
