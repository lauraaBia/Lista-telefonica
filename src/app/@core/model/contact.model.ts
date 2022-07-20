import {Observable} from "rxjs";

export class ContactModel {
  id: string;
  name: string;
  phone: string;
  status: string;
}

export abstract class IContactService {
  abstract listContacts(): Observable<ContactModel[]>;
  abstract createContact(contact: ContactModel): Observable<ContactModel>;
  abstract findContact(id: string): Observable<ContactModel>;
  abstract updateContact(contact: ContactModel): Observable<ContactModel>;
  abstract deleteContact(id: string): Observable<ContactModel>;
}




