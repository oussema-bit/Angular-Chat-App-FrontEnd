/* tslint:disable */
/* eslint-disable */
import { CategoryProjects } from '../models/category-projects';
import { Contest } from '../models/contest';
import { Option } from '../models/option';
import { User } from '../models/user';
export interface ProjectsDto {
  category?: CategoryProjects;
  classe?: string;
  coach?: string;
  contest?: Contest;
  date?: string;
  groupName?: string;
  groupStreak?: number;
  id?: number;
  imageUrl?: string;
  name?: string;
  niveau?: 'PREMIERE' | 'DEUXIEME' | 'TROIXIEME' | 'QUATRIEME' | 'CINQUEME';
  nominated?: boolean;
  numberOfVotes?: number;
  optionSpeciality?: Option;
  scolarYear?: string;
  userId?: number;
  videoUrl?: string;
  voters?: Array<User>;
  votingpool?: boolean;
  winner?: boolean;
}
