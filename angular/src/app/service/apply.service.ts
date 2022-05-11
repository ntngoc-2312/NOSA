import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const nopCVUrl = "http://localhost:49499/api/NopCVs";
const luucvUrl = "http://localhost:49499/api/Luucongviecs";
@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  readonly PhotoUrl = 'https://localhost:49499/Photos/'
  readonly cv = "http://localhost:49499/api/NopCVs";

  constructor(private httpClient: HttpClient) {

  }
  getAllCV(): Observable<any[]> {
    return this.httpClient.get<any[]>(nopCVUrl);
  }
  getNopCVByuser(id_user: any): Observable<any> {
    return this.httpClient.get<any>(`${nopCVUrl}/Getungtuyen/${id_user}`);
  }
  addCV(cv: any): Observable<any> {
    return this.httpClient.post<any>(nopCVUrl, cv);
  }
  // UPLOAD FILE
  upLoadPhoto(val: any){
    return this.httpClient.post(this.cv + '/UploadFile', val)
  }
  //lưu công việc
  getluubyuser(id_user: any): Observable<any> {
    return this.httpClient.get<any>(`${luucvUrl}/GetLuucviec/${id_user}`);
  }
  luucv(viec: any): Observable<any> {
    return this.httpClient.post<any>(luucvUrl, viec);
  }
  getAllLuu(): Observable<any[]> {
    return this.httpClient.get<any[]>(luucvUrl);
  }
  xoaluu(id_luucongviec: any) {
    return this.httpClient.delete(`${luucvUrl}/${id_luucongviec}`);
  }

}
