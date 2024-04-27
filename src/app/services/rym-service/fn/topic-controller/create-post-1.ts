/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TopicDto } from '../../models/topic-dto';

export interface CreatePost1$Params {
      body: TopicDto
}

export function createPost1(http: HttpClient, rootUrl: string, params: CreatePost1$Params, context?: HttpContext): Observable<StrictHttpResponse<TopicDto>> {
  const rb = new RequestBuilder(rootUrl, createPost1.PATH, 'post');
  if (params) {
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

createPost1.PATH = '/api/forums/topics/addTopic';
