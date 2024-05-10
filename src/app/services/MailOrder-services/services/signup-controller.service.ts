/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createUser1 } from '../fn/signup-controller/create-user-1';
import { CreateUser1$Params } from '../fn/signup-controller/create-user-1';

@Injectable({ providedIn: 'root' })
export class SignupControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createUser1()` */
  static readonly CreateUser1Path = '/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser1$Response(params: CreateUser1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return createUser1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser1(params: CreateUser1$Params, context?: HttpContext): Observable<{
}> {
    return this.createUser1$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
