/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentDto } from '../../models/comment-dto';

export interface UpdateComment$Params {
  id: number;
      body: CommentDto
}

export function updateComment(http: HttpClient, rootUrl: string, params: UpdateComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDto>> {
  const rb = new RequestBuilder(rootUrl, updateComment.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommentDto>;
    })
  );
}

updateComment.PATH = '/api/forums/topics/posts/comments/updateComment/{id}';
