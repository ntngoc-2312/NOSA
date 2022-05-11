import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions ={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  }
const dmucUrl="http://localhost:49499/api/Danhmuctins"
const tinUrl="http://localhost:49499/api/Tintucs"
@Injectable({
  providedIn: 'root'
})

export class TinService {
  constructor(private http: HttpClient) { }

  GetDMungvien(): Observable<any[]> {
    return this.http.get<any[]>(dmucUrl+'/GetDMungvien');
  }
  GetDMtuyendung(): Observable<any[]> {
    return this.http.get<any[]>(dmucUrl+'/GetDMtuyendung');
  }
  find(id_danhmuctin:number):Observable<any>{
    return this.http.get<any>(`${dmucUrl}/${id_danhmuctin}`).pipe(
    )
  }
  getTinbyDM(id_danhmuctin:number):Observable<any>{
    return this.http.get<any>(`${tinUrl}/GetTinByDM/${id_danhmuctin}`).pipe()
  }
  getCTTin(id_tin:number):Observable<any>{
    return this.http.get<any>(`${tinUrl}/${id_tin}`).pipe(
    )
  }
  getAll():Observable<any[]>{
    return this.http.get<any[]>(tinUrl).pipe(
    )
  }
}
