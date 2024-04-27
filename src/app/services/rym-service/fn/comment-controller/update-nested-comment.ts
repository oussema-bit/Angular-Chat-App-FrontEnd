/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Comment } from '../../models/comment';

export interface UpdateNestedComment$Params {
  parentId: number;
  nestedId: number;
      body: Comment
}

export function updateNestedComment(http: HttpClient, rootUrl: string, params: UpdateNestedComment$Params, context?: HttpContext): Observable<StrictHttpResponse<Comment>> {
  const rb = new RequestBuilder(rootUrl, updateNestedComment.PATH, 'put');
  if (params) {
    rb.path('parentId', params.parentId, {});
    rb.path('nestedId', params.nestedId, {});
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

updateNestedComment.PATH = '/api/forums/topics/posts/comments/updateNestedComment/{parentId}/{nestedId}';
