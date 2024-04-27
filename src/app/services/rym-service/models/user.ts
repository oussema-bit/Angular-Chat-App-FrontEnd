/* tslint:disable */
/* eslint-disable */
import { Post } from '../models/post';
export interface User {
  badWordCount?: number;
  banDuration?: {
'seconds'?: number;
'nano'?: number;
'negative'?: boolean;
'zero'?: boolean;
'units'?: Array<{
'dateBased'?: boolean;
'timeBased'?: boolean;
'durationEstimated'?: boolean;
}>;
};
  banned?: boolean;
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  phone?: string;
  posts?: Post;
}
