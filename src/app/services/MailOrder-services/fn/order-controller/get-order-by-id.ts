/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Order } from '../../models/order';

export interface GetOrderById$Params {
  id: number;
}

export function getOrderById(http: HttpClient, rootUrl: string, params: GetOrderById$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
  const rb = new RequestBuilder(rootUrl, getOrderById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Order>;
    })
  );
}

getOrderById.PATH = '/api/orders/{id}';
