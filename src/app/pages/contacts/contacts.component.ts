import { Component, OnInit } from '@angular/core';
import {ContactModel} from "../../@core/model/contact.model";
import {ContactService} from "../../@core/api/contact.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: ContactModel[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.listContacts().subscribe((res) => {
      this.contacts = res;
    })
  }
}
