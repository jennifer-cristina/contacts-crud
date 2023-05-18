import { EventTypes } from '../event';

export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}
