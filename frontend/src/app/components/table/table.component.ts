import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

import { ContactService } from 'src/app/services/contact.service';
import {
  formatContactToShow,
  formatDateToPTBR,
} from 'src/app/utils/contact-formatter';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();

    this.contactService.contacts$.subscribe((response) => {
      const formattedData = response.data.map((item) =>
        formatContactToShow(item)
      );
      this.contacts = formattedData;
    });
  }

  getContacts() {
    this.contactService.getAll().subscribe((response) => {
      const formattedData = response.data.map((item) =>
        formatContactToShow(item)
      );
      this.contacts = formattedData;
    });
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter((a) => contact !== a);
    this.contactService.deleteContact(contact.id).subscribe();
  }

  editContact(id: number) {
    this.contactService.getContactById(id);
  }
}
