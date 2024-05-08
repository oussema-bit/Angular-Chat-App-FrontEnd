/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MarketplaceProduct } from '../../models/marketplace-product';

export interface UpdateProduct$Params {
  id: number;
      body: MarketplaceProduct
}

export function updateProduct(http: HttpClient, rootUrl: string, params: UpdateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<MarketplaceProduct>> {
  const rb = new RequestBuilder(rootUrl, updateProduct.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MarketplaceProduct>;
    })
  );
}

updateProduct.PATH = '/api/marketplace/products/updateProduct/{id}';
