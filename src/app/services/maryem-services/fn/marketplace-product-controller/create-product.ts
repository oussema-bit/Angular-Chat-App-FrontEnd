/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MarketplaceProduct } from '../../models/marketplace-product';

export interface CreateProduct$Params {
  productName: string;
  productDescription: string;
  productPrice: number;
  categoryId?: number;
      body?: {
'imageFile'?: Blob;
}
}

export function createProduct(http: HttpClient, rootUrl: string, params: CreateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<MarketplaceProduct>> {
  const rb = new RequestBuilder(rootUrl, createProduct.PATH, 'post');
  if (params) {
    rb.query('productName', params.productName, {});
    rb.query('productDescription', params.productDescription, {});
    rb.query('productPrice', params.productPrice, {});
    rb.query('categoryId', params.categoryId, {});
    rb.body(params.body, 'multipart/form-data');
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

createProduct.PATH = '/api/marketplace/products/addProduct';
