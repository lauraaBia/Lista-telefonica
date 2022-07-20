import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import {ContactsRoutingModule} from "./contacts-routing.module";
import {ContactsComponentsModule} from "./contacts-components/contacts-components.module";
import { ContactsFormComponent } from './contacts-form/contacts-form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ContactsComponent,
    ContactsFormComponent,
  ],
  exports: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ContactsComponentsModule,
    FormsModule
  ]
})
export class ContactsModule { }
