import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User_role } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
const apiUrl = "http://localhost:49499/api/User_role";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAllUser(): Observable<User_role[]> {
    return this.httpClient.get<User_role[]>(apiUrl + '/GetAllUser_role');
  }
  Login( username:any,pass:any): Observable<User_role> {
    let tmp ={
      username:username,
      pass :pass
    }
    return this.httpClient.post<User_role>(apiUrl + '/Login',tmp);
  }
  getUsers(id_user: number): Observable<any> {
    return this.httpClient.get(`${apiUrl}/${id_user}`);
  }
  addUser(val: User_role): Observable<User_role> {
    return this.httpClient.post<User_role>(`${apiUrl}`, val);
  }

  updateById(id_user: number, user: User_role): Observable<User_role> {
    return this.httpClient.put<User_role>(`${apiUrl}/${id_user}`, user);
  }
  deleteById(id_user: number): Observable<User_role> {
    return this.httpClient.delete<User_role>(`${apiUrl}/${id_user}`);
  }

}