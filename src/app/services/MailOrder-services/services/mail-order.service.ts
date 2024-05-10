/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { sendmail } from '../fn/mail-order/sendmail';
import { Sendmail$Params } from '../fn/mail-order/sendmail';

@Injectable({ providedIn: 'root' })
export class MailOrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sendmail()` */
  static readonly SendmailPath = '/MailOrder/send/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendmail$Response(params: Sendmail$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sendmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendmail(params: Sendmail$Params, context?: HttpContext): Observable<void> {
    return this.sendmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
