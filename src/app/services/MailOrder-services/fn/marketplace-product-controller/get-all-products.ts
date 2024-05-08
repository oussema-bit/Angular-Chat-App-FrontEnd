/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MarketplaceProduct } from '../../models/marketplace-product';

export interface GetAllProducts$Params {
}

export function getAllProducts(http: HttpClient, rootUrl: string, params?: GetAllProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MarketplaceProduct>>> {
  const rb = new RequestBuilder(rootUrl, getAllProducts.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MarketplaceProduct>>;
    })
  );
}

getAllProducts.PATH = '/api/marketplace/products/getAllProducts';
