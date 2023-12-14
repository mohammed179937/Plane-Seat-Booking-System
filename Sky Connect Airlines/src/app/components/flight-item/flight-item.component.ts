import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent {
  @Input()
  flight?: Flight

  @Input()
  user?: User

  seatNum: number = 0

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() {

  }

  book() {
    let ticket = new Ticket
    ticket.price = String(this.flight?.price)
    ticket.seat_num = this.seatNum
    ticket.trip_id = this.flight?._id
    ticket.user_id = this.user?._id
    this.flightService.bookFlight(ticket).subscribe(
      () => {
        window.alert("Ticket booked successfully")
        this.router.navigate(['booked-tickets'], { state: { user: this.user } })
      }
    );
  }

}
