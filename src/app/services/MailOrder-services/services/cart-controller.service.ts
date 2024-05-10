/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addItemToCart } from '../fn/cart-controller/add-item-to-cart';
import { AddItemToCart$Params } from '../fn/cart-controller/add-item-to-cart';
import { CartItem } from '../models/cart-item';
import { deleteItemFromCart } from '../fn/cart-controller/delete-item-from-cart';
import { DeleteItemFromCart$Params } from '../fn/cart-controller/delete-item-from-cart';

@Injectable({ providedIn: 'root' })
export class CartControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addItemToCart()` */
  static readonly AddItemToCartPath = '/api/cart/add-item';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addItemToCart()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addItemToCart$Response(params: AddItemToCart$Params, context?: HttpContext): Observable<StrictHttpResponse<CartItem>> {
    return addItemToCart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addItemToCart$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addItemToCart(params: AddItemToCart$Params, context?: HttpContext): Observable<CartItem> {
    return this.addItemToCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<CartItem>): CartItem => r.body)
    );
  }

  /** Path part for operation `deleteItemFromCart()` */
  static readonly DeleteItemFromCartPath = '/api/cart/delete-item/{cartItemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemFromCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemFromCart$Response(params: DeleteItemFromCart$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteItemFromCart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemFromCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemFromCart(params: DeleteItemFromCart$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteItemFromCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
