import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setUser } from './../../store/actions/user.actions';
import { selectUserIsLoggedIn } from './../../store/selectors/user.selectors';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styles: [
  ]
})
export class LogginComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;
  userIdentifiant!: string;
  userPassword!: string;
  errorMsg: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(selectUserIsLoggedIn);
  }

  onConnect(loggIn = true) {
    this.errorMsg = '';
    if (loggIn) {
      if (this.userIdentifiant && this.userPassword)
        this.store.dispatch(setUser({ user: { id: this.userIdentifiant, pwd: this.userPassword } }));
      else this.errorMsg = 'Identifiant et mot de passe requis';
    }
    else {
      this.userIdentifiant = this.userPassword = '';
      this.store.dispatch(setUser({ user: {} }));
    }
  }

}
