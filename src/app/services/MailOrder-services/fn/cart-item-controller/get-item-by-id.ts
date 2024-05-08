/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CartItem } from '../../models/cart-item';

export interface GetItemById$Params {
  id: number;
}

export function getItemById(http: HttpClient, rootUrl: string, params: GetItemById$Params, context?: HttpContext): Observable<StrictHttpResponse<CartItem>> {
  const rb = new RequestBuilder(rootUrl, getItemById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CartItem>;
    })
  );
}

getItemById.PATH = '/api/cart-items/{id}';
