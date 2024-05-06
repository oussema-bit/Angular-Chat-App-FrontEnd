/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Role } from '../../models/role';

export interface GetallRoles$Params {
}

export function getallRoles(http: HttpClient, rootUrl: string, params?: GetallRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Role>>> {
  const rb = new RequestBuilder(rootUrl, getallRoles.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Role>>;
    })
  );
}

getallRoles.PATH = '/getallRoles';
