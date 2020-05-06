import { DepartmentService } from './../../_service/department.service';
import { Department } from './../../_models/department';
import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { StudentService } from '../../_service/student.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Student } from '../../_models/student';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Student[];
  constructor(private studentservice: StudentService,
              private router: Router,
              private departmentservice: DepartmentService) { }

    // deleteStudent(id,i){

    //   console.log(id)
    //   this.studentservice.deleteStudent(id).subscribe(a=>{
    //     this.students.splice(i,1)
    //     console.log(a)
    //    }
    //   )
    // }
  ngOnInit(): void {
    this.studentservice.getstudents().subscribe(d=>{
      console.log(d);
      this.students = d;
      this.departmentservice.getdepartments().subscribe(a=>{console.log(a)})
    }); // finish function
  }
  deletestudent(x){
    console.log(x);
    this.studentservice.deleteone(x).subscribe( a => {
        // tslint:disable-next-line: triple-equals
        if ( a.data == 'deleted'){
          alert('done');
          this.ngOnInit();
        }
//

    });
  }

}
