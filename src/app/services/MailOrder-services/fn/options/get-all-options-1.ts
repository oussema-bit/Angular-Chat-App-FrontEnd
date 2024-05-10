/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OptionDto } from '../../models/option-dto';

export interface GetAllOptions1$Params {
}

export function getAllOptions1(http: HttpClient, rootUrl: string, params?: GetAllOptions1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OptionDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllOptions1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OptionDto>>;
    })
  );
}

getAllOptions1.PATH = '/options';
