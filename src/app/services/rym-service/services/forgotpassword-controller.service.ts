/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { forgotPassword } from '../fn/forgotpassword-controller/forgot-password';
import { ForgotPassword$Params } from '../fn/forgotpassword-controller/forgot-password';
import { setPassword } from '../fn/forgotpassword-controller/set-password';
import { SetPassword$Params } from '../fn/forgotpassword-controller/set-password';

@Injectable({ providedIn: 'root' })
export class ForgotpasswordControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `setPassword()` */
  static readonly SetPasswordPath = '/set-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  setPassword$Response(params: SetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return setPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  setPassword(params: SetPassword$Params, context?: HttpContext): Observable<string> {
    return this.setPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `forgotPassword()` */
  static readonly ForgotPasswordPath = '/forgot-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgotPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPassword$Response(params: ForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return forgotPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `forgotPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPassword(params: ForgotPassword$Params, context?: HttpContext): Observable<string> {
    return this.forgotPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
