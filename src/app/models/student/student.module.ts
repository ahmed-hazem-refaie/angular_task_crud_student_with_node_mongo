import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentModule { 
  constructor(
    public _id?:Number,
    public Name?:String,
    public Email?:String
  ){}
}
