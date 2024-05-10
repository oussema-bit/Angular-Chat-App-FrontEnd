/* tslint:disable */
/* eslint-disable */
import { SousCategory } from '../models/sous-category';
export interface CategoryProjectsDto {
  description: string;
  id?: number;
  name: string;
  sousCategory?: Array<SousCategory>;
}
