import { Student } from 'src/app/_models/student';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl = 'http://localhost:8080/students/';
  getstudents(){
    return this.http.get<Student[]>(this.baseurl + 'list');
  }
  getstudentdetails(id: number){
    return this.http.get<Student>(this.baseurl + 'details/' + id);
  }
  AddStudent(std: Student){
    return this.http.post<Student>(this.baseurl + 'add', std);
  }
  deleteone(id: number){

    return this.http.get<any>(this.baseurl + 'delete/' + id );
  }
  edit(id: number,std : Student){

    return this.http.post<any>(this.baseurl + 'edit/' + id ,std);
  }
  constructor( private http: HttpClient) { }
}
