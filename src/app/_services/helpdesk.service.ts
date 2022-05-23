import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.cpsa_api;
const headers = {
  "Authorization": environment.jwt
}

@Injectable({
  providedIn: 'root'
})
export class HelpdeskService {

  constructor( private http:HttpClient) { }

  getTickets() {
    return this.http.get(API + '/helpdeskv2/tickets/', {headers});
  }
}
