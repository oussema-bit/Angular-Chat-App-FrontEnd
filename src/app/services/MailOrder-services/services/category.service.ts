/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCategory } from '../fn/category/add-category';
import { AddCategory$Params } from '../fn/category/add-category';
import { CategoryProjectsDto } from '../models/category-projects-dto';
import { deleteCategory } from '../fn/category/delete-category';
import { DeleteCategory$Params } from '../fn/category/delete-category';
import { getAllCategories } from '../fn/category/get-all-categories';
import { GetAllCategories$Params } from '../fn/category/get-all-categories';
import { getCategoryById } from '../fn/category/get-category-by-id';
import { GetCategoryById$Params } from '../fn/category/get-category-by-id';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllCategories()` */
  static readonly GetAllCategoriesPath = '/category-projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories$Response(params?: GetAllCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryProjectsDto>>> {
    return getAllCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories(params?: GetAllCategories$Params, context?: HttpContext): Observable<Array<CategoryProjectsDto>> {
    return this.getAllCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryProjectsDto>>): Array<CategoryProjectsDto> => r.body)
    );
  }

  /** Path part for operation `addCategory()` */
  static readonly AddCategoryPath = '/category-projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategory$Response(params: AddCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryProjectsDto>> {
    return addCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategory(params: AddCategory$Params, context?: HttpContext): Observable<CategoryProjectsDto> {
    return this.addCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryProjectsDto>): CategoryProjectsDto => r.body)
    );
  }

  /** Path part for operation `getCategoryById()` */
  static readonly GetCategoryByIdPath = '/category-projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById$Response(params: GetCategoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryProjectsDto>> {
    return getCategoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById(params: GetCategoryById$Params, context?: HttpContext): Observable<CategoryProjectsDto> {
    return this.getCategoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryProjectsDto>): CategoryProjectsDto => r.body)
    );
  }

  /** Path part for operation `deleteCategory()` */
  static readonly DeleteCategoryPath = '/category-projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory$Response(params: DeleteCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory(params: DeleteCategory$Params, context?: HttpContext): Observable<void> {
    return this.deleteCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
