/* tslint:disable */
/* eslint-disable */
import { Option } from '../models/option';
import { ProjectsDto } from '../models/projects-dto';
export interface ContestDto {
  description?: string;
  id?: number;
  name?: string;
  niveau?: 'PREMIERE' | 'DEUXIEME' | 'TROIXIEME' | 'QUATRIEME' | 'CINQUEME';
  option?: Option;
  projects?: Array<ProjectsDto>;
}
