import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {ContactModel} from "../../../../@core/model/contact.model";
import {ContactService} from "../../../../@core/api/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Output() contactsEvent = new EventEmitter();

  @Input() contact: ContactModel;



  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  deleteContact(id: string): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contactsEvent.emit(null);
    })
  }
}
