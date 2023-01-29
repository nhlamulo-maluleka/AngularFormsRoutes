import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'ngForms';
  public loginForm!: FormGroup;
  public submitted: boolean = false;

  constructor(private route: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void { }

  public getControl(control: String) {
    return this.loginForm.controls[`${control}`];
  }

  public isValid(key: String): Boolean {
    if (this.getControl(key).invalid) {
      return false;
    }
    return true;
  }

  public isTouched(key: String): Boolean {
    if (!this.getControl(key).touched) {
      return false;
    }
    return true;
  }

  public get isFormValid(): boolean {
    return this.loginForm.invalid;
  }

  logUser() {
    // Marking Controls as Edited!
    this.loginForm.markAllAsTouched();

    if (this.isFormValid) return;

    this.route.navigate(['dashboard']);
  }
}
