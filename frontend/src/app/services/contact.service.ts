import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';

import { Observable } from 'rxjs';
import { Contact, CreateOrUpdateContact } from '../models/contact';
import { ApiResponse } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contact = new Subject<ApiResponse<Contact>>();

  public selectedContact = new Subject<Contact>();

  contact$ = this.contact.asObservable();

  selectedContact$ = this.selectedContact.asObservable();

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
      .subscribe((response) => this.selectedContact.next(response.data));
  }

  createContact(data: CreateOrUpdateContact): Observable<ApiResponse<Contact>> {
    const test = this.http.post<ApiResponse<Contact>>(this.apiUrl, data);

    return test;
  }

  deleteContact(id: number) {
    return this.http.delete<Contact>(`${this.apiUrl}/${id}`);
  }

  updateContact(id: number, data: CreateOrUpdateContact) {
    return this.http.put<ApiResponse<Contact>>(`${this.apiUrl}/${id}`, data);
  }
}
