import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import {} from 'rxjs';

import { Observable, Subject, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { Contact, CreateOrUpdateContact } from '../models/contact';
import { ApiResponse } from '../models/api';
import { formatContactToSave, formatDateToPtBR } from '../utils';

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

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAll(): Observable<ApiResponse<Contact[]>> {
    return this.http
      .get<ApiResponse<Contact[]>>(this.apiUrl)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getContactById(id: number) {
    this.http
      .get<ApiResponse<Contact>>(this.apiUrl + '/' + id)
      .subscribe(({ data }) =>
        this.selectedContact.next({
          ...data,
          birth_date: formatDateToPtBR(data.birth_date),
        })
      );
  }

  createContact(data: CreateOrUpdateContact): Observable<ApiResponse<Contact>> {
    const formattedData = formatContactToSave(data);

    return this.http
      .post<ApiResponse<Contact>>(this.apiUrl, formattedData)
      .pipe(catchError(this.handleError.bind(this)));
  }

  deleteContact(id: number) {
    return this.http
      .delete<Contact>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  updateContact(id: number, data: CreateOrUpdateContact) {
    const formattedData = formatContactToSave(data);

    return this.http
      .put<ApiResponse<Contact>>(`${this.apiUrl}/${id}`, formattedData)
      .pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    this.toastr.error(error.error.message);

    return new Observable();
  }
}
