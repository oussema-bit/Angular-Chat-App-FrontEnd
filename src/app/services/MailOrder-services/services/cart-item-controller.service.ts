/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addItem } from '../fn/cart-item-controller/add-item';
import { AddItem$Params } from '../fn/cart-item-controller/add-item';
import { CartItem } from '../models/cart-item';
import { deleteItem } from '../fn/cart-item-controller/delete-item';
import { DeleteItem$Params } from '../fn/cart-item-controller/delete-item';
import { findByProductId } from '../fn/cart-item-controller/find-by-product-id';
import { FindByProductId$Params } from '../fn/cart-item-controller/find-by-product-id';
import { getAllItems } from '../fn/cart-item-controller/get-all-items';
import { GetAllItems$Params } from '../fn/cart-item-controller/get-all-items';
import { getItemById } from '../fn/cart-item-controller/get-item-by-id';
import { GetItemById$Params } from '../fn/cart-item-controller/get-item-by-id';
import { updateItem } from '../fn/cart-item-controller/update-item';
import { UpdateItem$Params } from '../fn/cart-item-controller/update-item';

@Injectable({ providedIn: 'root' })
export class CartItemControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getItemById()` */
  static readonly GetItemByIdPath = '/api/cart-items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemById$Response(params: GetItemById$Params, context?: HttpContext): Observable<StrictHttpResponse<CartItem>> {
    return getItemById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemById(params: GetItemById$Params, context?: HttpContext): Observable<CartItem> {
    return this.getItemById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CartItem>): CartItem => r.body)
    );
  }

  /** Path part for operation `updateItem()` */
  static readonly UpdateItemPath = '/api/cart-items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateItem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateItem$Response(params: UpdateItem$Params, context?: HttpContext): Observable<StrictHttpResponse<CartItem>> {
    return updateItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateItem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateItem(params: UpdateItem$Params, context?: HttpContext): Observable<CartItem> {
    return this.updateItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<CartItem>): CartItem => r.body)
    );
  }

  /** Path part for operation `deleteItem()` */
  static readonly DeleteItemPath = '/api/cart-items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem$Response(params: DeleteItem$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem(params: DeleteItem$Params, context?: HttpContext): Observable<void> {
    return this.deleteItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllItems()` */
  static readonly GetAllItemsPath = '/api/cart-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllItems$Response(params?: GetAllItems$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CartItem>>> {
    return getAllItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllItems(params?: GetAllItems$Params, context?: HttpContext): Observable<Array<CartItem>> {
    return this.getAllItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CartItem>>): Array<CartItem> => r.body)
    );
  }

  /** Path part for operation `addItem()` */
  static readonly AddItemPath = '/api/cart-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addItem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addItem$Response(params: AddItem$Params, context?: HttpContext): Observable<StrictHttpResponse<CartItem>> {
    return addItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addItem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addItem(params: AddItem$Params, context?: HttpContext): Observable<CartItem> {
    return this.addItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<CartItem>): CartItem => r.body)
    );
  }

  /** Path part for operation `findByProductId()` */
  static readonly FindByProductIdPath = '/api/cart-items/findByProductId/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByProductId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByProductId$Response(params: FindByProductId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CartItem>>> {
    return findByProductId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByProductId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByProductId(params: FindByProductId$Params, context?: HttpContext): Observable<Array<CartItem>> {
    return this.findByProductId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CartItem>>): Array<CartItem> => r.body)
    );
  }

}
