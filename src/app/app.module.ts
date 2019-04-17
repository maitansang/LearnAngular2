import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {EmployeeListComponent} from './employee.component';
import { EmployeeService } from './services/employee.service';
@NgModule({
  declarations: [
    AppComponent, EmployeeListComponent
  ],

  providers:[EmployeeService],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
