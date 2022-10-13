import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  loginApiUrlLink = "http://rdd.jharkhand.gov.in:83/api/user_api";
  constructor(private http: HttpClient) { }

  users(){
    return this.http.get(this.loginApiUrlLink);
  }
}
