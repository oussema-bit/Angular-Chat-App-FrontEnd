/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { affectRoleToUser } from '../fn/role-controller/affect-role-to-user';
import { AffectRoleToUser$Params } from '../fn/role-controller/affect-role-to-user';
import { createRole } from '../fn/role-controller/create-role';
import { CreateRole$Params } from '../fn/role-controller/create-role';
import { deleteRole } from '../fn/role-controller/delete-role';
import { DeleteRole$Params } from '../fn/role-controller/delete-role';
import { getallRoles } from '../fn/role-controller/getall-roles';
import { GetallRoles$Params } from '../fn/role-controller/getall-roles';
import { Role } from '../models/role';
import { RoleDto } from '../models/role-dto';
import { showAllRoles } from '../fn/role-controller/show-all-roles';
import { ShowAllRoles$Params } from '../fn/role-controller/show-all-roles';
import { updateRole } from '../fn/role-controller/update-role';
import { UpdateRole$Params } from '../fn/role-controller/update-role';

@Injectable({ providedIn: 'root' })
export class RoleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateRole()` */
  static readonly UpdateRolePath = '/updateRole/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateRole$Response(params: UpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return updateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateRole(params: UpdateRole$Params, context?: HttpContext): Observable<RoleDto> {
    return this.updateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `createRole()` */
  static readonly CreateRolePath = '/createRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole$Response(params: CreateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return createRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole(params: CreateRole$Params, context?: HttpContext): Observable<RoleDto> {
    return this.createRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `affectRoleToUser()` */
  static readonly AffectRoleToUserPath = '/affect-role-to-user/{userId}/{roleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `affectRoleToUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  affectRoleToUser$Response(params: AffectRoleToUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return affectRoleToUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `affectRoleToUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  affectRoleToUser(params: AffectRoleToUser$Params, context?: HttpContext): Observable<void> {
    return this.affectRoleToUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `showAllRoles()` */
  static readonly ShowAllRolesPath = '/list-all-roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `showAllRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  showAllRoles$Response(params?: ShowAllRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
    return showAllRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `showAllRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  showAllRoles(params?: ShowAllRoles$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.showAllRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

  /** Path part for operation `getallRoles()` */
  static readonly GetallRolesPath = '/getallRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getallRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getallRoles$Response(params?: GetallRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Role>>> {
    return getallRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getallRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getallRoles(params?: GetallRoles$Params, context?: HttpContext): Observable<Array<Role>> {
    return this.getallRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Role>>): Array<Role> => r.body)
    );
  }

  /** Path part for operation `deleteRole()` */
  static readonly DeleteRolePath = '/deleteRole/{idRole}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRole$Response(params: DeleteRole$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRole(params: DeleteRole$Params, context?: HttpContext): Observable<void> {
    return this.deleteRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
