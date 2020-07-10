import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ui-login',
  template: `
<div class="container">
<form [formGroup]="loginForm" (ngSubmit)="login()" #lgnForm="ngForm">
  <input type="text" formControlName="email" (keyup.enter)="login()" placeholder="Email">
  <input name="password" [type]="showPassword ? 'text' : 'password'"  formControlName="password" placeholder="Mot de passe">
  <button type="submit" *ngIf="!isLoading" [disabled]="loginForm.invalid" color="light">
    VALIDER
  </button>
</form>
</div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm: FormGroup;
  public isLoading: boolean;
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
   private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  togglePassword() {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  login() {
    this.isLoading = true;
  }
}
