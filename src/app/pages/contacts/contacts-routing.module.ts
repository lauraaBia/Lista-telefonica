import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactsComponent} from "./contacts.component";
import {ContactsFormComponent} from "./contacts-form/contacts-form.component";

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
  {
    path: 'contacts-create',
    component: ContactsFormComponent
  },
  {
    path: 'contacts-edit/:id',
    component: ContactsFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
