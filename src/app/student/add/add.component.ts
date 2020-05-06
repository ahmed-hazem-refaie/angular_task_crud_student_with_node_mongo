import { Router } from '@angular/router';
import { DepartmentService } from './../../_service/department.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_service/student.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {


  xx: any;
  nstd: Student = new Student();
  departments: Department[];
  constructor(private stdser: StudentService, private r: Router , private deptserv: DepartmentService) { }
  onSave(q){
    // this.stdser.AddStudent(this.nstd).subscribe(a=>{
    //   console.log(a);
    // });
  console.log(q);
  }

  ngOnInit(): void {
this.deptserv.getdepartments().subscribe(a => {
  this.departments = a;
  console.log(this.departments);

});
  }
  onSubmit(sa){
    // console.log(this.nstd);
    let a: Student = new Student(11, 'aaaa' , 'ssssssss' , 1 );
    // console.log(sa.value);
    this.stdser.AddStudent(sa.value).subscribe(x=>{console.log(x)
    this.r.navigateByUrl('/student')

    })
  }

}
