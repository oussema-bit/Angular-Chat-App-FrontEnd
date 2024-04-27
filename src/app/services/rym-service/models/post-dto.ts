/* tslint:disable */
/* eslint-disable */
import { Topic } from '../models/topic';
import { User } from '../models/user';
export interface PostDto {
  content?: string;
  createdAt?: string;
  createdBy?: User;
  post_id?: number;
  topic?: Topic;
}
