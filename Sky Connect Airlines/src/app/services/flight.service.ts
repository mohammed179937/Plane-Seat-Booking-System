import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Ticket } from '../models/ticket';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    let url = this.apiUrl + '/AuthenticateUser' + '/' + email + '/' + password
    return this.http.get<any>(url);
  }

  register(user: User) {
    let url = this.apiUrl + '/RegisterUser'
    return this.http.post<any>(url, user);
  }

  getAllFlights() {
    let url = this.apiUrl + '/trip/getAllTrips'
    return this.http.get<any>(url, undefined);
  }

  getCustomerTickets(id: string) {
    let url = this.apiUrl + '/ticket/getUserTickets'+ '/' + id
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.get<any>(url, { params: params });
  }

  bookFlight(ticket: Ticket) {
    let url = this.apiUrl + '/ticket/GenerateTicket'
    return this.http.post<any>(url, ticket)
  }

}
