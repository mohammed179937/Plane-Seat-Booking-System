import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent {
  @Input()
  ticket?: Ticket

}
