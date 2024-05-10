/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContestDto } from '../../models/contest-dto';

export interface AddContest$Params {
      body: ContestDto
}

export function addContest(http: HttpClient, rootUrl: string, params: AddContest$Params, context?: HttpContext): Observable<StrictHttpResponse<ContestDto>> {
  const rb = new RequestBuilder(rootUrl, addContest.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContestDto>;
    })
  );
}

addContest.PATH = '/contest-bal-de-projet';
