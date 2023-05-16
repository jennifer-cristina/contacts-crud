export interface Contact {
  id: number;
  name: string;
  birth_date: Date;
  email: string;
  profession: string;
  phone: string;
  cell_phone: string;
}

export interface CreateOrUpdateContact {
  name: string;
  birth_date: Date;
  email: string;
  profession: string;
  phone: string;
  cell_phone: string;
}
