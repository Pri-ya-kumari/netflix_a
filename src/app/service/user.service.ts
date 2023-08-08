import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:3000/userdata';
  constructor(private http : HttpClient) { }

  saveUsers(data:any){
    return this.http.post(this.url,data);
  }
}
