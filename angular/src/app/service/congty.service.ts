import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const apiUrl = "http://localhost:49499/api/Congties";

@Injectable({
  providedIn: 'root'
})

export class CongtyService {
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<any[]>{
    return this.httpClient.get<any[]>(apiUrl).pipe()
  }
  find(id_congty:number):Observable<any>{
    return this.httpClient.get<any>(`${apiUrl}/${id_congty}`).pipe(
    )
  }
  getById(id_congty:number):Observable<any>{
    return this.httpClient.get(`${apiUrl}/${id_congty}`);
  }
  add(val:any): Observable<any> {
    return this.httpClient.post<any>(apiUrl, val);
  }
  getCongtyByUser(id_user:number):Observable<any>{
    return this.httpClient.get<any>(`${apiUrl}/GetCongtyByUser/${id_user}`).pipe()
  }
}
