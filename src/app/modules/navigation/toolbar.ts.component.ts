import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl:'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})

export class ToolbarComponent {
  isAuthenticated;

  constructor(
    public auth: AuthService,
    private router: Router
    ) {
    if (this.auth.isLoggedIn) {
      this.isAuthenticated = true;
    }
  }

  sendLogout() {
    this.auth.logout();
    if (this.auth.isLoggedOut) {
      this.isAuthenticated = false;
    }
  }

  goToShoppingCart(){
    this.router.navigate(['/order'])
  }
}
