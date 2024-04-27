/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostDto } from '../../models/post-dto';

export interface CreatePost$Params {
      body: PostDto
}

export function createPost(http: HttpClient, rootUrl: string, params: CreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
  const rb = new RequestBuilder(rootUrl, createPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PostDto>;
    })
  );
}

createPost.PATH = '/api/forums/topics/posts/addPost';
