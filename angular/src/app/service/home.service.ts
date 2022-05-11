import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const apiUrl = "http://localhost:49499/api/Congviecs";
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  readonly url = "http://localhost:49499/api/Congviecs";
  constructor(private http: HttpClient) { }

  getall(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/GetAllCongviec');
  }
  getCongviecbyngay(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/GetCongviec');
  }
  
  find(id_congviec:number):Observable<any>{
    return this.http.get(`${this.url}/${id_congviec}`);
  }
  getbyid(id_congviec:number):Observable<any[]>{
    return this.http.get<any>(apiUrl +'/GetbyID/'+id_congviec);
  }
  GetCongviecByDMuc(id_danhmucnganh:number):Observable<any>{
    return this.http.get<any>(`${apiUrl}/GetCongviecByDMuc/${id_danhmucnganh}`).pipe()
  }
  GetCongviecByCongty(id_congty:number):Observable<any>{
    return this.http.get<any>(`${apiUrl}/GetCongviecByCongty/${id_congty}`).pipe()
  }
  add(val:any): Observable<any> {
    return this.http.post<any>(apiUrl, val);
  }

}
