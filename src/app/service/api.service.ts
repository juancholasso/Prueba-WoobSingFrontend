import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL="http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  create(body:any){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.API_URL+'/api/user', body, httpOptions );
  }

  list(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.API_URL+'/api/user', httpOptions );
  }


  update(id, body:any){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(this.API_URL+'/api/user/'+id, body, httpOptions );
  }

  get(id){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.API_URL+'/api/user/'+id, httpOptions );
  }

  delete(id){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(this.API_URL+'/api/user/'+id, httpOptions );
  }
}
