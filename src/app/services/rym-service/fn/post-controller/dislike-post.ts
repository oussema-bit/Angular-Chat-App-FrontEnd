/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Post } from '../../models/post';

export interface DislikePost$Params {
  postId: number;
}

export function dislikePost(http: HttpClient, rootUrl: string, params: DislikePost$Params, context?: HttpContext): Observable<StrictHttpResponse<Post>> {
  const rb = new RequestBuilder(rootUrl, dislikePost.PATH, 'post');
  if (params) {
    rb.path('postId', params.postId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Post>;
    })
  );
}

dislikePost.PATH = '/api/forums/topics/posts/posts/{postId}/dislike';
