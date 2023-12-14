import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  user?: User

  constructor(private router: Router) { }
  goToHome() {
    this.router.navigate(['home'])
  }
  goToContactUs() {

  }
  goToBookedTickets() {
    this.router.navigate(['booked-tickets'], { state: { user: this.user } })
  }
}
