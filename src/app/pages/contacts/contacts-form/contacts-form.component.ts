import { Component, OnInit } from '@angular/core';
import {ContactModel} from "../../../@core/model/contact.model";
import {ContactService} from "../../../@core/api/contact.service";
import { v4 as uuidv4 } from 'uuid';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss'],
  providers: [ContactService]
})
export class ContactsFormComponent implements OnInit {
  contact: ContactModel;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.contact = new ContactModel();

    this.activatedRoute.params.subscribe((param) => {
      if(!param.id){
        return;
      }

      this.loadContactById(param.id);
    })
  }

  loadContactById(id: string): void {
    this.contactService.findContact(id).subscribe((contact) => {
      this.contact = contact;
    })
  }

  createContact(): void {
    this.contactService.createContact({...this.contact, id: uuidv4()})
      .subscribe(() => {
      this.router.navigate(['../']).then(r => [''])
    })
  }

  updateContact(): void {
    this.contactService.updateContact(this.contact)
      .subscribe(() => {
        this.router.navigate(['../']).then(r => [''])
      })
  }

  onSubmit(): void {
    if(this.contact.id){
      this.updateContact();
    }else {
      this.createContact();
    }
  }
}
