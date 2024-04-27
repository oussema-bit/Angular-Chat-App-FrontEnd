/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Comment } from '../../models/comment';

export interface AddNestedComment$Params {
  parentId: number;
      body: Comment
}

export function addNestedComment(http: HttpClient, rootUrl: string, params: AddNestedComment$Params, context?: HttpContext): Observable<StrictHttpResponse<Comment>> {
  const rb = new RequestBuilder(rootUrl, addNestedComment.PATH, 'post');
  if (params) {
    rb.path('parentId', params.parentId, {});
    rb.body(params.body, 'application/json');
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

addNestedComment.PATH = '/api/forums/topics/posts/comments/addNestedComment/{parentId}';
