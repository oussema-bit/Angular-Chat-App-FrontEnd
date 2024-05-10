/* tslint:disable */
/* eslint-disable */
import { MarketplaceProduct } from '../models/marketplace-product';
export interface CartItem {
  id?: number;
  price?: number;
  product?: MarketplaceProduct;
  quantity?: number;
}
