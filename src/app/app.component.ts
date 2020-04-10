import { Component } from '@angular/core';

import Auth0Lock from 'auth0-lock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor() {
    try {
      var auth0Lock = new Auth0Lock();

      auth0Lock.show();
    } catch {
      // muzzle
    }
  }
}
