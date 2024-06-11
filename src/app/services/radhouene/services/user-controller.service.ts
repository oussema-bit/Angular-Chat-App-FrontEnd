/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuthentificationResponse } from '../models/authentification-response';
import { createAuthentificationToken } from '../fn/user-controller/create-authentification-token';
import { CreateAuthentificationToken$Params } from '../fn/user-controller/create-authentification-token';
import { createUser } from '../fn/user-controller/create-user';
import { CreateUser$Params } from '../fn/user-controller/create-user';
import { getAllUserEmails } from '../fn/user-controller/get-all-user-emails';
import { GetAllUserEmails$Params } from '../fn/user-controller/get-all-user-emails';
import { getAllUsers } from '../fn/user-controller/get-all-users';
import { GetAllUsers$Params } from '../fn/user-controller/get-all-users';
import { regenerateOtp } from '../fn/user-controller/regenerate-otp';
import { RegenerateOtp$Params } from '../fn/user-controller/regenerate-otp';
import { User } from '../models/user';
import { verifyAccount } from '../fn/user-controller/verify-account';
import { VerifyAccount$Params } from '../fn/user-controller/verify-account';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `verifyAccount()` */
  static readonly VerifyAccountPath = '/user/verify-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyAccount$Response(params: VerifyAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return verifyAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `verifyAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyAccount(params: VerifyAccount$Params, context?: HttpContext): Observable<string> {
    return this.verifyAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `regenerateOtp()` */
  static readonly RegenerateOtpPath = '/user/regenerate-otp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `regenerateOtp()` instead.
   *
   * This method doesn't expect any request body.
   */
  regenerateOtp$Response(params: RegenerateOtp$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return regenerateOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `regenerateOtp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  regenerateOtp(params: RegenerateOtp$Params, context?: HttpContext): Observable<string> {
    return this.regenerateOtp$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createUser()` */
  static readonly CreateUserPath = '/user/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return createUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params: CreateUser$Params, context?: HttpContext): Observable<{
}> {
    return this.createUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `createAuthentificationToken()` */
  static readonly CreateAuthentificationTokenPath = '/user/authentication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAuthentificationToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAuthentificationToken$Response(params: CreateAuthentificationToken$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthentificationResponse>> {
    return createAuthentificationToken(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAuthentificationToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAuthentificationToken(params: CreateAuthentificationToken$Params, context?: HttpContext): Observable<AuthentificationResponse> {
    return this.createAuthentificationToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthentificationResponse>): AuthentificationResponse => r.body)
    );
  }

  /** Path part for operation `getAllUserEmails()` */
  static readonly GetAllUserEmailsPath = '/user/emails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUserEmails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUserEmails$Response(params?: GetAllUserEmails$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getAllUserEmails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUserEmails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUserEmails(params?: GetAllUserEmails$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getAllUserEmails$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/user/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<Array<User>> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

}
