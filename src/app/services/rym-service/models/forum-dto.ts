/* tslint:disable */
/* eslint-disable */
import { Topic } from '../models/topic';
import { User } from '../models/user';
export interface ForumDto {
  createdBy?: User;
  created_at?: string;
  description?: string;
  forum_id?: number;
  forum_name?: string;
  topics?: Array<Topic>;
}
