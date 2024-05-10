/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OptionDto } from '../../models/option-dto';

export interface GetOptionById1$Params {
  id: number;
}

export function getOptionById1(http: HttpClient, rootUrl: string, params: GetOptionById1$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionDto>> {
  const rb = new RequestBuilder(rootUrl, getOptionById1.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OptionDto>;
    })
  );
}

getOptionById1.PATH = '/options/{id}';
