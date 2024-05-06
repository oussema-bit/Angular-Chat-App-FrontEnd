/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Topic } from '../../models/topic';

export interface GetAllTopicsByForumId$Params {
  forum_id: number;
}

export function getAllTopicsByForumId(http: HttpClient, rootUrl: string, params: GetAllTopicsByForumId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Topic>>> {
  const rb = new RequestBuilder(rootUrl, getAllTopicsByForumId.PATH, 'get');
  if (params) {
    rb.path('forum_id', params.forum_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Topic>>;
    })
  );
}

getAllTopicsByForumId.PATH = '/api/forums/topics/{forum_id}';
