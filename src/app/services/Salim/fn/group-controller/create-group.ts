/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Group } from '../../models/group';

export interface CreateGroup$Params {
  idevent: number;
      body: Group
}

export function createGroup(http: HttpClient, rootUrl: string, params: CreateGroup$Params, context?: HttpContext): Observable<StrictHttpResponse<Group>> {
  const rb = new RequestBuilder(rootUrl, createGroup.PATH, 'post');
  if (params) {
    rb.path('idevent', params.idevent, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Group>;
    })
  );
}

createGroup.PATH = '/group/addgroup/{idevent}';
