import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationUrl = "http://127.0.0.1:8000/api/auth";

  constructor(
    private http: HttpClient
  ) { }

  createReservation(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.reservationUrl+"/reservation/add/", reservation);
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationUrl+"/reservation");
  }

  deleteReservation(id: number): Observable<Reservation>{
    return this.http.delete<Reservation>(`${this.reservationUrl}/reservation/delete/{id}`);
  }

  findReservationById(id: number): Observable<Reservation>{
    return this.http.get<Reservation>(`${this.reservationUrl}/reservation/find/{id}`);
  }

  updateReservations(id: number, reservation: Reservation){
    return this.http.put<Reservation>(`${this.reservationUrl}/reservation/`+id,reservation)
  }


}
