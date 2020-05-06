import { Department } from './../_models/department';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseurl = 'http://localhost:8080/departments/';

  constructor( public http: HttpClient) {}
  getdepartments(){
  return this.http.get<Department[]>(this.baseurl + 'list');
}

getdepartmentdetails(id: number){
  return this.http.get<Department>(this.baseurl + 'details/' + id);
}
 adddepartment(std: Department){
     return this.http.post<Department>(this.baseurl + 'add', std);
   }


   deleteone(id: number){

  return this.http.get<any>(this.baseurl + 'delete/' + id );
}
}







