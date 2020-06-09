import { StateOrder } from '../enums/state-order.enum';

export interface OrderI {
  tjmHT: number;
  nbJours: number;
  tva: number;
  state: StateOrder;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
  totalHT(): number;
  totalTtc(): number;
}
