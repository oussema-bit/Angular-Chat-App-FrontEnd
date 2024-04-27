/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TopicDto } from '../../models/topic-dto';

export interface UpdateTopic$Params {
  id: number;
      body: TopicDto
}

export function updateTopic(http: HttpClient, rootUrl: string, params: UpdateTopic$Params, context?: HttpContext): Observable<StrictHttpResponse<TopicDto>> {
  const rb = new RequestBuilder(rootUrl, updateTopic.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TopicDto>;
    })
  );
}

updateTopic.PATH = '/api/forums/topics/updateTopic/{id}';
