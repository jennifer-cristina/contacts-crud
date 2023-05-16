import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.getContacts();
    this.contactService.contact$.subscribe((contact) => {
      console.log(contact);
      this.contacts = [...this.contacts, contact.data];
    });
  }

  getContacts() {
    this.contactService
      .getAll()
      .subscribe((response) => (this.contacts = response.data));
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter((a) => contact !== a);
    this.contactService.deleteContact(contact.id).subscribe();
  }

  editContact(id: number) {
    this.contactService.getContactById(id);
  }
}
