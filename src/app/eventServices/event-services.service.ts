import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServicesService {

  baseUrl = 'http://localhost:5000'
  constructor(private http: HttpClient) { }


  loginApi() {
    return this.http.get(`${this.baseUrl}/admin`, )
  }


  addEvents(bodyData: any) {
    return this.http.post(`${this.baseUrl}/events`, bodyData)
  }

  getEvents() {
    return this.http.get(`${this.baseUrl}/events`, {})
  }

  getSingleEvents(id: any) {
    return this.http.get(`${this.baseUrl}/events/${id}`, {})
  }

  editEvents(id: any, bodyData: any) {
    return this.http.put(`${this.baseUrl}/events/${id}`, bodyData)
  }

  deleteEvents(id: any) {
    return this.http.delete(`${this.baseUrl}/events/${id}`, {})
  }


  sendMessage(bodyData: any) {
    return this.http.post(`${this.baseUrl}/contact`, bodyData)
  }

  getMessage() {
    return this.http.get(`${this.baseUrl}/contact`, {})
  }
}
