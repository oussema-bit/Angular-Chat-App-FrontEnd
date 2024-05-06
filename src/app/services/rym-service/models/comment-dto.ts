/* tslint:disable */
/* eslint-disable */
import { Post } from '../models/post';
import { User } from '../models/user';
export interface CommentDto {
  comment_id?: number;
  content?: string;
  createdBy?: User;
  post?: Post;
}
