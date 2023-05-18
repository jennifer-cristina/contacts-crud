import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ToastrService } from 'ngx-toastr';

import { ContactService } from 'src/app/services/contact.service';
import { formatContactToShow, formatDateToPtBR } from 'src/app/utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService
  ) {}

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
    this.contactService.deleteContact(contact.id).subscribe((data) => {
      this.toastr.success('Contato apagado com sucesso');
    });
  }

  editContact(id: number) {
    this.contactService.getContactById(id);
  }
}
