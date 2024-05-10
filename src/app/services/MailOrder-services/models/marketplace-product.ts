/* tslint:disable */
/* eslint-disable */
import { ProductCategory } from '../models/product-category';
export interface MarketplaceProduct {
  category?: ProductCategory;
  id?: number;
  imageUrl?: string;
  productDescription?: string;
  productName?: string;
  productPrice?: number;
}
