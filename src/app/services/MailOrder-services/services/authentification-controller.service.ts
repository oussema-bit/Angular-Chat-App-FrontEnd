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
import { createAuthentificationToken1 } from '../fn/authentification-controller/create-authentification-token-1';
import { CreateAuthentificationToken1$Params } from '../fn/authentification-controller/create-authentification-token-1';

@Injectable({ providedIn: 'root' })
export class AuthentificationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createAuthentificationToken1()` */
  static readonly CreateAuthentificationToken1Path = '/authentication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAuthentificationToken1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAuthentificationToken1$Response(params: CreateAuthentificationToken1$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthentificationResponse>> {
    return createAuthentificationToken1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAuthentificationToken1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAuthentificationToken1(params: CreateAuthentificationToken1$Params, context?: HttpContext): Observable<AuthentificationResponse> {
    return this.createAuthentificationToken1$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthentificationResponse>): AuthentificationResponse => r.body)
    );
  }

}
