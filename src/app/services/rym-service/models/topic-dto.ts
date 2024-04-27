/* tslint:disable */
/* eslint-disable */
import { Forum } from '../models/forum';
import { User } from '../models/user';
export interface TopicDto {
  createdAt?: string;
  createdBy?: User;
  forum?: Forum;
  title?: string;
  topic_id?: number;
}
