/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface CommentDto {
  comment_id?: number;
  content?: string;
  createdBy?: User;
}
