/* tslint:disable */
/* eslint-disable */
import { Forum } from '../models/forum';
import { Post } from '../models/post';
import { Role } from '../models/role';
export interface User {
  active?: boolean;
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
  banStartTime?: string;
  banned?: boolean;
  email?: string;
  forums?: Array<Forum>;
  id?: number;
  name?: string;
  otp?: string;
  otpGeneratedTime?: string;
  password?: string;
  phone?: string;
  posts?: Post;
  roles?: Array<Role>;
  status?: 'ONLINE' | 'OFFLINE';
}
