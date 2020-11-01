import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <app-toolbar></app-toolbar>
    <div class="o-container">
      <form [formGroup]="loginForm" class="a-form">
        <h1>Inloggen</h1>
        <mat-form-field appearance="fill" matFormFieldControl class="a-input">
          <mat-label>Gebruikersnaam</mat-label>
          <input matInput formControlName="username" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="a-input">
          <mat-label>Wachtwoord</mat-label>
          <input matInput formControlName="password" type="password" />
        </mat-form-field>

        <button mat-raised-button color="primary" (click)="login()">
          inloggen
        </button>
        <a routerLink="/register" class="a-link" routerLinkActive=""
          >Register</a
        >
      </form>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const val = this.loginForm.value;
    if (val.username && val.password) {
      this.authService.login(val.username, val.password).subscribe(() => {
        console.log('User is logged in');
        this.router.navigate(['/']);
      });
    }
  }
}
