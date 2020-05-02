import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_service/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  nstd:Student=new Student();
  constructor(private stdser:StudentService) { }
  onSave(){
    this.stdser.AddStudent(this.nstd).subscribe(a=>{
      console.log(a);
    })
  }

  ngOnInit(): void {
  }

}
