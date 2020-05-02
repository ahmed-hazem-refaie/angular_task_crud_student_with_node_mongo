import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { DetailsComponent } from './student/details/details.component';
import { EditComponent } from './student/edit/edit.component';
import { DepartmentlistComponent } from './department/departmentlist/departmentlist.component';
import { DepartmentaddComponent } from './department/departmentadd/departmentadd.component';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    NotfoundComponent,
    ListComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    DepartmentlistComponent,
    DepartmentaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
