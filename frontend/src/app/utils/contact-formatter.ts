import { Contact, CreateOrUpdateContact } from '../models/contact';

export const formatContactToSave = (contact: CreateOrUpdateContact) => {
  console.log(contact.birth_date);
  const phone = contact.phone.replace(/[^a-zA-Z0-9]/g, '');
  const cell_phone = contact.cell_phone.replace(/[^a-zA-Z0-9]/g, '');
  const birthDateWithOnlyNumbers = contact.birth_date.replace(
    /[^a-zA-Z0-9]/g,
    ''
  );

  const day = birthDateWithOnlyNumbers.substring(0, 2);
  const month = birthDateWithOnlyNumbers.substring(2, 4);
  const year = birthDateWithOnlyNumbers.substring(4);
  const birth_date = `${year}-${month}-${day}`;

  return {
    ...contact,
    phone,
    cell_phone,
    birth_date,
  };
};

export const formatDateToPTBR = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8);
  const birthDate = `${day}/${month}/${year}`;

  return birthDate;
};

export const formatContactToShow = (contact: Contact) => {
  const phone = contact.phone.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
  const cell_phone = contact.cell_phone.replace(
    /(\d{2})?(\d{5})?(\d{4})/,
    '($1) $2-$3'
  );
  const birth_date = formatDateToPTBR(contact.birth_date);

  return {
    ...contact,
    phone,
    cell_phone,
    birth_date,
  };
};
