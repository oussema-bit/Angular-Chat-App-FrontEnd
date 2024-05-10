/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CartItem } from '../../models/cart-item';

export interface FindByProductId$Params {
  productId: number;
}

export function findByProductId(http: HttpClient, rootUrl: string, params: FindByProductId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CartItem>>> {
  const rb = new RequestBuilder(rootUrl, findByProductId.PATH, 'get');
  if (params) {
    rb.path('productId', params.productId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CartItem>>;
    })
  );
}

findByProductId.PATH = '/api/cart-items/findByProductId/{productId}';
