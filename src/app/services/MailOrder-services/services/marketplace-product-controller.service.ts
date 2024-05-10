/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createProduct } from '../fn/marketplace-product-controller/create-product';
import { CreateProduct$Params } from '../fn/marketplace-product-controller/create-product';
import { deleteProduct } from '../fn/marketplace-product-controller/delete-product';
import { DeleteProduct$Params } from '../fn/marketplace-product-controller/delete-product';
import { findProductsByCategoryId } from '../fn/marketplace-product-controller/find-products-by-category-id';
import { FindProductsByCategoryId$Params } from '../fn/marketplace-product-controller/find-products-by-category-id';
import { getAllProducts } from '../fn/marketplace-product-controller/get-all-products';
import { GetAllProducts$Params } from '../fn/marketplace-product-controller/get-all-products';
import { getProductById } from '../fn/marketplace-product-controller/get-product-by-id';
import { GetProductById$Params } from '../fn/marketplace-product-controller/get-product-by-id';
import { MarketplaceProduct } from '../models/marketplace-product';
import { updateProduct } from '../fn/marketplace-product-controller/update-product';
import { UpdateProduct$Params } from '../fn/marketplace-product-controller/update-product';

@Injectable({ providedIn: 'root' })
export class MarketplaceProductControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateProduct()` */
  static readonly UpdateProductPath = '/api/marketplace/products/updateProduct/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct$Response(params: UpdateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<MarketplaceProduct>> {
    return updateProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct(params: UpdateProduct$Params, context?: HttpContext): Observable<MarketplaceProduct> {
    return this.updateProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<MarketplaceProduct>): MarketplaceProduct => r.body)
    );
  }

  /** Path part for operation `createProduct()` */
  static readonly CreateProductPath = '/api/marketplace/products/addProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProduct()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createProduct$Response(params: CreateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<MarketplaceProduct>> {
    return createProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createProduct$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  createProduct(params: CreateProduct$Params, context?: HttpContext): Observable<MarketplaceProduct> {
    return this.createProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<MarketplaceProduct>): MarketplaceProduct => r.body)
    );
  }

  /** Path part for operation `getProductById()` */
  static readonly GetProductByIdPath = '/api/marketplace/products/getProductById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById$Response(params: GetProductById$Params, context?: HttpContext): Observable<StrictHttpResponse<MarketplaceProduct>> {
    return getProductById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById(params: GetProductById$Params, context?: HttpContext): Observable<MarketplaceProduct> {
    return this.getProductById$Response(params, context).pipe(
      map((r: StrictHttpResponse<MarketplaceProduct>): MarketplaceProduct => r.body)
    );
  }

  /** Path part for operation `getAllProducts()` */
  static readonly GetAllProductsPath = '/api/marketplace/products/getAllProducts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProducts$Response(params?: GetAllProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MarketplaceProduct>>> {
    return getAllProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProducts(params?: GetAllProducts$Params, context?: HttpContext): Observable<Array<MarketplaceProduct>> {
    return this.getAllProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MarketplaceProduct>>): Array<MarketplaceProduct> => r.body)
    );
  }

  /** Path part for operation `findProductsByCategoryId()` */
  static readonly FindProductsByCategoryIdPath = '/api/marketplace/products/category/{categoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findProductsByCategoryId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProductsByCategoryId$Response(params: FindProductsByCategoryId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MarketplaceProduct>>> {
    return findProductsByCategoryId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findProductsByCategoryId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProductsByCategoryId(params: FindProductsByCategoryId$Params, context?: HttpContext): Observable<Array<MarketplaceProduct>> {
    return this.findProductsByCategoryId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MarketplaceProduct>>): Array<MarketplaceProduct> => r.body)
    );
  }

  /** Path part for operation `deleteProduct()` */
  static readonly DeleteProductPath = '/api/marketplace/products/deleteProduct/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct$Response(params: DeleteProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct(params: DeleteProduct$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
