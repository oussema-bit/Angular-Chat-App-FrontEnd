/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Role } from '../models/role';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  active?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  id?: number;
  name?: string;
  otp?: string;
  otpGeneratedTime?: string;
  password?: string;
  phone?: string;
  roles?: Array<Role>;
  status?: 'ONLINE' | 'OFFLINE';
  username?: string;
}
