import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.cpsa_api;
const API_W_JWT = API + '/cars/v2/email';
const API_WO_JWT = API + '/cbg-util/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(data) {

    return of( {status:true, res:Math.random} );
  }
}
