import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtDecodeOptions} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private jwtHelper:JwtHelperService = new JwtHelperService();
  private decodedToken: any;
  private decodedt: any;
  constructor() {
    this.decodedToken=this.jwtHelper.decodeToken(sessionStorage.getItem('userToken') as string)
  }
  get decodedT(){
    return this.decodedToken;
  }
  get userRoles(): any{
    return  this.decodedToken.rolesList;
  }
  get userRolesNames(): string[]{
    return this.decodedToken.rolesList.map((role: { name: any; }) => role.name)

  }
  get userFullName(): string{
    return  this.decodedToken.name;
  }
  get userId(): number{
    return  this.decodedToken.userId;
  }
}
