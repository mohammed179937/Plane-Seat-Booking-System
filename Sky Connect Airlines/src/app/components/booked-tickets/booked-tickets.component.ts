import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-booked-tickets',
  templateUrl: './booked-tickets.component.html',
  styleUrls: ['./booked-tickets.component.css']
})
export class BookedTicketsComponent {

  @Input()
  user?: User

  userTickets: Ticket[] = []
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    if (history.state.user) {
      this.user = history.state.user
      this.flightService.getCustomerTickets(this.user?._id!).subscribe(
        (response) => {
          console.log(response)
          this.userTickets = response
        }
      )
    }
  }

}
