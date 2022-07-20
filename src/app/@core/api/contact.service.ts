import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IContactService, ContactModel} from "../model/contact.model";
import {Observable} from "rxjs";

@Injectable()
export class ContactService extends IContactService{
  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) {
    super();
  }

  listContacts(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(`${this.baseUrl}/phonebook`);
  }

  createContact(contact: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(`${this.baseUrl}/phonebook`, contact)
  }

  findContact(id: string): Observable<ContactModel> {
    return this.http.get<ContactModel>(`${this.baseUrl}/phonebook/${id}`);
  }

  updateContact(contact: ContactModel): Observable<ContactModel> {
    return this.http.put<ContactModel>(`${this.baseUrl}/phonebook/${contact.id}`, contact);
  }

  deleteContact(id: string): Observable<ContactModel> {
    return this.http.delete<ContactModel>(`${this.baseUrl}/phonebook/${id}`);
  }
}





