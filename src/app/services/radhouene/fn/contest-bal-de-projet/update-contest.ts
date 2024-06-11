/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContestDto } from '../../models/contest-dto';

export interface UpdateContest$Params {
  id: number;
  optionId: number;
      body: ContestDto
}

export function updateContest(http: HttpClient, rootUrl: string, params: UpdateContest$Params, context?: HttpContext): Observable<StrictHttpResponse<ContestDto>> {
  const rb = new RequestBuilder(rootUrl, updateContest.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('optionId', params.optionId, {});
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

updateContest.PATH = '/contest-bal-de-projet/update/{id}/{optionId}';
