/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ForumDto } from '../../models/forum-dto';

export interface CreateForum$Params {
      body: ForumDto
}

export function createForum(http: HttpClient, rootUrl: string, params: CreateForum$Params, context?: HttpContext): Observable<StrictHttpResponse<ForumDto>> {
  const rb = new RequestBuilder(rootUrl, createForum.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ForumDto>;
    })
  );
}

createForum.PATH = '/api/forums/addForum';
