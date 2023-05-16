import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Contact, CreateOrUpdateContact } from 'src/app/models/contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private contactService: ContactService) {
    this.contactService.selectedContact$.subscribe((contact) => {
      this.contact = contact;
      this.setFormData(contact);
      this.formMethod = 'EDIT';
    });
  }

  contact?: Contact;
  contactForm!: FormGroup;
  contacts: Contact[] = [];
  formMethod: string = 'SAVE';

  ngOnInit(): void {
    this.setFormData(this.contact);
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get birth_date() {
    return this.contactForm.get('birth_date')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get profession() {
    return this.contactForm.get('profession')!;
  }

  get phone() {
    return this.contactForm.get('phone')!;
  }

  get cell_phone() {
    return this.contactForm.get('cell_phone')!;
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.contactForm.invalid) {
      return;
    }

    const data: Contact = this.contactForm.value;

    if (this.formMethod === 'EDIT') {
      return this.editContact(data);
    }

    this.createContact(data);
  }

  setFormData(data: Contact | undefined) {
    this.contactForm = new FormGroup({
      id: new FormControl(data ? data.id : undefined),
      name: new FormControl(data ? data.name : '', [Validators.required]),
      birth_date: new FormControl(data ? data.birth_date : '', [
        Validators.required,
      ]),
      email: new FormControl(data ? data.email : '', [Validators.required]),
      profession: new FormControl(data ? data.profession : '', [
        Validators.required,
      ]),
      phone: new FormControl(data ? data.phone : '', [Validators.required]),
      cell_phone: new FormControl(data ? data.cell_phone : '', [
        Validators.required,
      ]),
    });
  }

  createContact(data: CreateOrUpdateContact) {
    this.contactService.createContact(data).subscribe((response) => {
      this.contact = response.data;
      this.contactService.contact.next(response);
    });
  }

  editContact(data: Contact) {
    const { id, ...dataWithoutId } = data;
    this.contactService
      .updateContact(id, dataWithoutId)
      .subscribe((response) => console.log(response.message));
  }
}
