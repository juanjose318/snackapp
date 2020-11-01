import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <app-toolbar></app-toolbar>
    <div class="o-container">
      <form [formGroup]="registerForm" class="a-form">
        <h1>Register</h1>

        <mat-form-field appearance="fill" matFormFieldControl class="a-input">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" />
        </mat-form-field>
        <mat-form-field appearance="fill" matFormFieldControl class="a-input">
          <mat-label>Gebruikersnaam</mat-label>
          <input matInput formControlName="username" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="a-input">
          <mat-label>Wachtwoord</mat-label>
          <input matInput formControlName="password" type="password"/>
        </mat-form-field>

        <button mat-raised-button color="primary" (click)="register()">Register</button>
        <a routerLink="/login" class="a-link" routerLinkActive="" >Login</a>
      </form>
    </div>
  `,
  styleUrls: ['register.component.scss']
})

export class RegisterComponent  {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    const user: User = this.registerForm.value;
    if (user.username && user.password && user.email) {
      this.authService.register(user).subscribe(() => {
        this.router.navigate(['/login']);
      });
    }
  }

}
