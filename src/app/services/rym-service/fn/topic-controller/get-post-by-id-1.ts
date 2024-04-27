/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Topic } from '../../models/topic';

export interface GetPostById1$Params {
  id: number;
}

export function getPostById1(http: HttpClient, rootUrl: string, params: GetPostById1$Params, context?: HttpContext): Observable<StrictHttpResponse<Topic>> {
  const rb = new RequestBuilder(rootUrl, getPostById1.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Topic>;
    })
  );
}

getPostById1.PATH = '/api/forums/topics/getTopicById/{id}';
