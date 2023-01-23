import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngForms';
  public loginForm!: FormGroup;
  public submitted: boolean = false;

  constructor() {
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


    console.log(this.loginForm)
  }


}
