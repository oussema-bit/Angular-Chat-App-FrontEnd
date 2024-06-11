/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContestDto } from '../../models/contest-dto';

export interface CustomSaveContest$Params {
  optionId: number;
      body: ContestDto
}

export function customSaveContest(http: HttpClient, rootUrl: string, params: CustomSaveContest$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, customSaveContest.PATH, 'post');
  if (params) {
    rb.path('optionId', params.optionId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

customSaveContest.PATH = '/contest-bal-de-projet/save-contest/{optionId}';
