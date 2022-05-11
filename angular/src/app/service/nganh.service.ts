import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const apiUrl = "http://localhost:49499/api/Danhmucnganhs";
const trinhdoAPI="http://localhost:49499/api/Trinhdohocvans"
const kinhnghiemAPI="http://localhost:49499/api/Kinhnghiem"
const tinhAPI="http://localhost:49499/api/Tinhthanhs"
const loaihinhAPI="http://localhost:49499/api/Loaihinh"
@Injectable({
  providedIn: 'root'
})

export class NganhService {
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<any[]>{
    return this.httpClient.get<any[]>(apiUrl).pipe()
  }
  find(id_danhmucnganh:number):Observable<any>{
    return this.httpClient.get<any>(`${apiUrl}/${id_danhmucnganh}`).pipe(
    )
  }
  getById(id_danhmucnganh:number):Observable<any>{
    return this.httpClient.get(`${apiUrl}/${id_danhmucnganh}`);
  }
  getAllTrinhdo():Observable<any[]>{
    return this.httpClient.get<any[]>(trinhdoAPI).pipe()
  }
  getAllKinhnghiem():Observable<any[]>{
    return this.httpClient.get<any[]>(kinhnghiemAPI+"/GetKinhnghiems").pipe()
  }
  getAllTinh():Observable<any[]>{
    return this.httpClient.get<any[]>(tinhAPI).pipe()
  }
  getAllLoaihinh():Observable<any[]>{
    return this.httpClient.get<any[]>(loaihinhAPI+"/GetLoaihinh")
  }
}
