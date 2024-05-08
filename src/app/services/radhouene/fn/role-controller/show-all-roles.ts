/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';

export interface ShowAllRoles$Params {
}

export function showAllRoles(http: HttpClient, rootUrl: string, params?: ShowAllRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
  const rb = new RequestBuilder(rootUrl, showAllRoles.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RoleDto>>;
    })
  );
}

showAllRoles.PATH = '/list-all-roles';
