import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact/contact.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ContactComponent]
})
export class ContactsComponentsModule { }
