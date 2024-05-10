/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createProduct1 } from '../fn/product-category-controller/create-product-1';
import { CreateProduct1$Params } from '../fn/product-category-controller/create-product-1';
import { deleteCategory1 } from '../fn/product-category-controller/delete-category-1';
import { DeleteCategory1$Params } from '../fn/product-category-controller/delete-category-1';
import { getAllCategories1 } from '../fn/product-category-controller/get-all-categories-1';
import { GetAllCategories1$Params } from '../fn/product-category-controller/get-all-categories-1';
import { getCategoryById1 } from '../fn/product-category-controller/get-category-by-id-1';
import { GetCategoryById1$Params } from '../fn/product-category-controller/get-category-by-id-1';
import { ProductCategory } from '../models/product-category';

@Injectable({ providedIn: 'root' })
export class ProductCategoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createProduct1()` */
  static readonly CreateProduct1Path = '/api/marketplace/categories/addCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProduct1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct1$Response(params: CreateProduct1$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return createProduct1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createProduct1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct1(params: CreateProduct1$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.createProduct1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /** Path part for operation `getCategoryById1()` */
  static readonly GetCategoryById1Path = '/api/marketplace/categories/getCategoryById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById1$Response(params: GetCategoryById1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getCategoryById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById1(params: GetCategoryById1$Params, context?: HttpContext): Observable<{
}> {
    return this.getCategoryById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllCategories1()` */
  static readonly GetAllCategories1Path = '/api/marketplace/categories/getAllCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories1$Response(params?: GetAllCategories1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductCategory>>> {
    return getAllCategories1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCategories1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories1(params?: GetAllCategories1$Params, context?: HttpContext): Observable<Array<ProductCategory>> {
    return this.getAllCategories1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductCategory>>): Array<ProductCategory> => r.body)
    );
  }

  /** Path part for operation `deleteCategory1()` */
  static readonly DeleteCategory1Path = '/api/marketplace/categories/deleteCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategory1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory1$Response(params: DeleteCategory1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteCategory1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCategory1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory1(params: DeleteCategory1$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteCategory1$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
