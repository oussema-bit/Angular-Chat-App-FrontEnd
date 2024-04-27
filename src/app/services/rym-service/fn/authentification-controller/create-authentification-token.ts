/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthentificationRequest } from '../../models/authentification-request';
import { AuthentificationResponse } from '../../models/authentification-response';

export interface CreateAuthentificationToken$Params {
      body: AuthentificationRequest
}

export function createAuthentificationToken(http: HttpClient, rootUrl: string, params: CreateAuthentificationToken$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthentificationResponse>> {
  const rb = new RequestBuilder(rootUrl, createAuthentificationToken.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthentificationResponse>;
    })
  );
}

createAuthentificationToken.PATH = '/authentication';
