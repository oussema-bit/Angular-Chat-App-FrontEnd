/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SousCategoryDto } from '../../models/sous-category-dto';

export interface GetOptionById$Params {
  id: number;
}

export function getOptionById(http: HttpClient, rootUrl: string, params: GetOptionById$Params, context?: HttpContext): Observable<StrictHttpResponse<SousCategoryDto>> {
  const rb = new RequestBuilder(rootUrl, getOptionById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SousCategoryDto>;
    })
  );
}

getOptionById.PATH = '/sous-category/{id}';
