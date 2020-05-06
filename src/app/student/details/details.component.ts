import { Student } from './../../_models/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../_service/student.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
std: Student;
  constructor(private ar: ActivatedRoute , private studentservice: StudentService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(a => {
this.std=null;
console.log(a.id);
// tslint:disable-next-line: no-shadowed-variable
this.studentservice.getstudentdetails(a.id).subscribe( (a) => {
  setTimeout(() => {
    this.std = a;
    console.log(a);

  },3000)
// console.log(a)
});
    });
  }

}
