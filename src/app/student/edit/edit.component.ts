import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from './../../_service/department.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_service/student.service';
import { Department } from 'src/app/_models/department';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  xx: any;
  nstd: Student = new Student();
  departments: Department[];
  constructor(private ar: ActivatedRoute ,  private stdser: StudentService, private r: Router , private deptserv: DepartmentService) { }
  onSave(q){
    // this.stdser.AddStudent(this.nstd).subscribe(a=>{
    //   console.log(a);
    // });
  console.log(q);
  }

  ngOnInit(): void {
this.deptserv.getdepartments().subscribe(a => {
  this.departments = a;
  // console.log(this.departments);
  this.ar.params.subscribe( par =>{
    console.log(par.id )
    this.stdser.getstudentdetails(par.id).subscribe( std =>{
      this.nstd = std ;
    })
  })

});
  }
  onSubmit(sa){
    // console.log(this.nstd);
    let a: Student = new Student(11, 'aaaa' , 'ssssssss' , 1 );
    // console.log(sa.value);
    this.stdser.edit(sa.value._id,sa.value).subscribe(x=>{
      console.log(x)
      this.r.navigateByUrl('/student');

    })
  }

}





// ngOnInit(): void {
//   this.ar.params.subscribe(a => {
// this.std=null;
// console.log(a.id);
// // tslint:disable-next-line: no-shadowed-variable
// this.studentservice.getstudentdetails(a.id).subscribe( (a) => {
// setTimeout(() => {
//   this.std = a;
//   console.log(a);

// },3000)
// // console.log(a)
// });
//   });
// }
