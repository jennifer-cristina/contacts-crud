import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';

import { Observable } from 'rxjs';
import { Contact, CreateOrUpdateContact } from '../models/contact';
import { ApiResponse } from '../models/api';
import {
  formatContactToSave,
  formatDateToPTBR,
} from '../utils/contact-formatter';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contact = new Subject<ApiResponse<Contact>>();
  public contacts = new Subject<ApiResponse<Contact[]>>();
  public selectedContact = new Subject<Contact>();

  contact$ = this.contact.asObservable();
  selectedContact$ = this.selectedContact.asObservable();
  contacts$ = this.contacts.asObservable();

  private apiUrl = 'http://localhost:8000/api/contacts';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAll(): Observable<ApiResponse<Contact[]>> {
    return this.http.get<ApiResponse<Contact[]>>(this.apiUrl);
  }

  getContactById(id: number) {
    this.http
      .get<ApiResponse<Contact>>(this.apiUrl + '/' + id)
      .subscribe(({ data }) =>
        this.selectedContact.next({
          ...data,
          birth_date: formatDateToPTBR(data.birth_date),
        })
      );
  }

  createContact(data: CreateOrUpdateContact): Observable<ApiResponse<Contact>> {
    const formattedData = formatContactToSave(data);

    return this.http.post<ApiResponse<Contact>>(this.apiUrl, formattedData);
  }

  deleteContact(id: number) {
    return this.http.delete<Contact>(`${this.apiUrl}/${id}`);
  }

  updateContact(id: number, data: CreateOrUpdateContact) {
    const formattedData = formatContactToSave(data);

    return this.http.put<ApiResponse<Contact>>(
      `${this.apiUrl}/${id}`,
      formattedData
    );
  }
}
