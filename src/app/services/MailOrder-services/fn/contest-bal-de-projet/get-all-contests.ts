/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContestDto } from '../../models/contest-dto';

export interface GetAllContests$Params {
}

export function getAllContests(http: HttpClient, rootUrl: string, params?: GetAllContests$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContestDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllContests.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContestDto>>;
    })
  );
}

getAllContests.PATH = '/contest-bal-de-projet';
