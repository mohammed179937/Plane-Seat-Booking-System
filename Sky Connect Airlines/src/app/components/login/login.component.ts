import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: any

  constructor(
    private router: Router,
    private flightService: FlightService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    )
  }

  login() {
    this.flightService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      (response:User) => {

        this.router.navigate(['home'], { state: { user: response } })
      })
  }

  register() {
    this.router.navigate(['register'])
  }
}
