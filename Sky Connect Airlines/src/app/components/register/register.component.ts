import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  registerForm: any

  constructor(
    private router: Router,
    private flightService: FlightService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        birthdate: new FormControl('', Validators.required),
      }
    )
  }

  register() {
    let user: User
    user = {
      FirstName: this.registerForm.controls.firstName.value,
      LastName: this.registerForm.controls.lastName.value,
      Birthdate: this.registerForm.controls.birthdate.value,
      Email: this.registerForm.controls.email.value,
      Password: this.registerForm.controls.password.value
    }
    this.flightService.register(user).subscribe(
      () => {
        this.router.navigate(['login'])
      }

    )
  }
}
