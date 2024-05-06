/* tslint:disable */
/* eslint-disable */
import { Topic } from '../models/topic';
import { User } from '../models/user';
export interface PostDto {
  content?: string;
  createdAt?: string;
  createdBy?: User;
  dislikesCount?: number;
  lastUpdateDate?: string;
  likesCount?: number;
  pinned?: boolean;
  post_id?: number;
  topic?: Topic;
  voteCount?: number;
}
