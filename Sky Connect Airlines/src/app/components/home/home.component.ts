import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { Ticket } from 'src/app/models/ticket';
import { User } from 'src/app/models/user';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  user?: User
  searchForm: any
  searchClicked: boolean = false
  flights: Flight[] = []
  filteredFlights: Flight[] = []

  constructor( private datePipe: DatePipe, private flightService: FlightService) { }

  ngOnInit(): void {
    if (history.state) {
      this.user = history.state.user
    }
    this.searchForm = new FormGroup(
      {
        fromWhere: new FormControl('', Validators.required),
        whereTo: new FormControl('', Validators.required),
        travelDate: new FormControl('', Validators.required)
      }
    )
    this.flightService.getAllFlights().subscribe(
      (response) => {
        this.flights = response
        this.filteredFlights = response
      }
    )
  }

  search() {
    this.searchClicked = true
    this.filteredFlights = this.flights.filter(
      item =>
        item.from == this.searchForm.controls.fromWhere.value &&
        item.to == this.searchForm.controls.whereTo.value &&
        item.dep_date == this.datePipe.transform(this.searchForm.controls.travelDate.value, 'dd/MM/yyyy')
    )
  }

  resetFilters() {
    this.filteredFlights = this.flights
    this.searchForm.reset()
    this.searchClicked = false
  }



}
