import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = '../../assets/data/members.json';
  constructor(private http: HttpClient) {}

  getMembers(memberUrl:string){
    return this.http.get<[]>(this.baseUrl);
  }
  getSingleMemberDetails(memberID:any){
    return this.http.get<any>(this.baseUrl, memberID);
  }
}
