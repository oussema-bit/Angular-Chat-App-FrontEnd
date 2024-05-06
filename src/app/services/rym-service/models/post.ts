/* tslint:disable */
/* eslint-disable */
import {Topic} from "./topic";

export interface Post {
  content?: string;
  createdAt?: string;
  dislikesCount?: number;
  lastUpdateDate?: string;
  likesCount?: number;
  pinned?: boolean;
  post_id?: number;
  topic?: Topic;
  voteCount?: number;
  comments?: Comment;

}
