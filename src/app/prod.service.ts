import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http:HttpClient) { }
  public getAllProduct():Observable<any[]>
  {
    return this.http.get<any[]>('http://localhost:8081/api/standup');
  }

  public postProduct(value: any): Observable<any[]>
  {
    return this.http.post<any[]>(`http://localhost:8081/api/standup`,value);
  }
  public putProduct(value: any,StudentId: any): Observable<any[]>
  {
    return this.http.put<any[]>(`http://localhost:8081/api/updateStandup`,value);
  }
  public deleteProduct(StudentId: any): Observable<any[]>
  {
    return this.http.delete<any[]>(`http://localhost:8081/api/deleteStandup/5ea7c63943838239748126b0`);
  }
  
}
