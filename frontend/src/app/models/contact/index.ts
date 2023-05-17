export interface Contact {
  id: number;
  name: string;
  birth_date: string;
  email: string;
  profession: string;
  phone: string;
  cell_phone: string;
  has_whatsapp?: boolean;
  sms_notification?: boolean;
  email_notification?: boolean;
}

export interface CreateOrUpdateContact {
  name: string;
  birth_date: string;
  email: string;
  profession: string;
  phone: string;
  cell_phone: string;
  has_whatsapp?: boolean;
  sms_notification?: boolean;
  email_notification?: boolean;
}
