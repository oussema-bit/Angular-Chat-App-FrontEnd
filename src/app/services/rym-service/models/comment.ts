/* tslint:disable */
/* eslint-disable */
import { Post } from '../models/post';
import { User } from '../models/user';
export interface Comment {
  comment_id?: number;
  content?: string;
  createdBy?: User;
  dislikes_count?: number;
  likes_count?: number;
  nestedComments?: Array<Comment>;
  parentComment?: Comment;
  post_id?: number;
}
