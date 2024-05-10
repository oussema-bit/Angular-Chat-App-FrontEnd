/* tslint:disable */
/* eslint-disable */
import { Option } from '../models/option';
import { Projects } from '../models/projects';
export interface Contest {
  deadline?: string;
  description?: string;
  id?: number;
  image?: string;
  name?: string;
  niveau?: 'PREMIERE' | 'DEUXIEME' | 'TROIXIEME' | 'QUATRIEME' | 'CINQUEME';
  option?: Option;
  projects?: Array<Projects>;
}
