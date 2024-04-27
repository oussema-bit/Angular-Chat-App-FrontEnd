/* tslint:disable */
/* eslint-disable */
import { Comment } from '../models/comment';
import { Topic } from '../models/topic';
import { User } from '../models/user';
export interface Post {
  comments?: Array<Comment>;
  content?: string;
  createdAt?: string;
  dislikesCount?: number;
  lastUpdateDate?: string;
  likesCount?: number;
  pinned?: boolean;
  post_id?: number;
  topic?: Topic;
  user?: User;
  voteCount?: number;
}
