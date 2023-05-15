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
  }

  getContacts() {
    this.contactService
      .getAll()
      .subscribe((response) => (this.contacts = response.data));
  }
}
