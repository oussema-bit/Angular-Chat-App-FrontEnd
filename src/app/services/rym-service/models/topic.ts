/* tslint:disable */
/* eslint-disable */
import { Forum } from '../models/forum';
import { Post } from '../models/post';
import { User } from '../models/user';
export interface Topic {
  closed?: boolean;
  createdAt?: string;
  createdBy?: User;
  forum?: Forum;
  lastUpdateDate?: string;
  posts?: Array<Post>;
  title?: string;
  topic_id?: number;
}
