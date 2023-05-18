import { Contact } from '../models/contact';

export const formatDateToPtBR = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8);
  const birthDate = `${day}/${month}/${year}`;

  return birthDate;
};

export const formatDateToEnUS = (date: string) => {
  const birthDateWithOnlyNumbers = date?.replace(/[^a-zA-Z0-9]/g, '');

  const day = birthDateWithOnlyNumbers.substring(0, 2);
  const month = birthDateWithOnlyNumbers.substring(2, 4);
  const year = birthDateWithOnlyNumbers.substring(4);
  const birthDate = `${year}-${month}-${day}`;

  return birthDate;
};
