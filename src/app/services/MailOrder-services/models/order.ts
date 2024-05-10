/* tslint:disable */
/* eslint-disable */
import { CartItem } from '../models/cart-item';
import { Customer } from '../models/customer';
export interface Order {
  customer?: Customer;
  id?: number;
  orderCustomer?: Array<CartItem>;
  orderStatus?: 'PENDING' | 'DELIVERED' | 'CANCELED';
  paymentMethod?: 'ONLINE' | 'CASH_ON_DELIVERY';
}
