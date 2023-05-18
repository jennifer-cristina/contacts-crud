import { Contact, CreateOrUpdateContact } from '../models/contact';
import { formatDateToEnUS, formatDateToPtBR } from './date-formatter';

export const formatContactToSave = (contact: CreateOrUpdateContact) => {
  const phone = contact.phone.replace(/[^a-zA-Z0-9]/g, '');
  const cellPhone = contact.cell_phone.replace(/[^a-zA-Z0-9]/g, '');

  return {
    ...contact,
    phone,
    cell_phone: cellPhone,
    birth_date: formatDateToEnUS(contact.birth_date),
  };
};

export const formatContactToShow = (contact: Contact) => {
  const phone = contact.phone.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
  const cell_phone = contact.cell_phone.replace(
    /(\d{2})?(\d{5})?(\d{4})/,
    '($1) $2-$3'
  );
  const birth_date = formatDateToPtBR(contact.birth_date);

  return {
    ...contact,
    phone,
    cell_phone,
    birth_date,
  };
};
