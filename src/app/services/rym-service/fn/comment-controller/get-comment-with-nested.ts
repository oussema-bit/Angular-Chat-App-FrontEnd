/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Comment } from '../../models/comment';

export interface GetCommentWithNested$Params {
  id: number;
}

export function getCommentWithNested(http: HttpClient, rootUrl: string, params: GetCommentWithNested$Params, context?: HttpContext): Observable<StrictHttpResponse<Comment>> {
  const rb = new RequestBuilder(rootUrl, getCommentWithNested.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Comment>;
    })
  );
}

getCommentWithNested.PATH = '/api/forums/topics/posts/comments/getCommentWithNested/{id}';
