/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addOption } from '../fn/sous-category/add-option';
import { AddOption$Params } from '../fn/sous-category/add-option';
import { deleteOptionById } from '../fn/sous-category/delete-option-by-id';
import { DeleteOptionById$Params } from '../fn/sous-category/delete-option-by-id';
import { getAllOptions } from '../fn/sous-category/get-all-options';
import { GetAllOptions$Params } from '../fn/sous-category/get-all-options';
import { getOptionById } from '../fn/sous-category/get-option-by-id';
import { GetOptionById$Params } from '../fn/sous-category/get-option-by-id';
import { SousCategoryDto } from '../models/sous-category-dto';

@Injectable({ providedIn: 'root' })
export class SousCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllOptions()` */
  static readonly GetAllOptionsPath = '/sous-category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllOptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOptions$Response(params?: GetAllOptions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SousCategoryDto>>> {
    return getAllOptions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllOptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOptions(params?: GetAllOptions$Params, context?: HttpContext): Observable<Array<SousCategoryDto>> {
    return this.getAllOptions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SousCategoryDto>>): Array<SousCategoryDto> => r.body)
    );
  }

  /** Path part for operation `addOption()` */
  static readonly AddOptionPath = '/sous-category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOption()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOption$Response(params: AddOption$Params, context?: HttpContext): Observable<StrictHttpResponse<SousCategoryDto>> {
    return addOption(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addOption$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOption(params: AddOption$Params, context?: HttpContext): Observable<SousCategoryDto> {
    return this.addOption$Response(params, context).pipe(
      map((r: StrictHttpResponse<SousCategoryDto>): SousCategoryDto => r.body)
    );
  }

  /** Path part for operation `getOptionById()` */
  static readonly GetOptionByIdPath = '/sous-category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionById$Response(params: GetOptionById$Params, context?: HttpContext): Observable<StrictHttpResponse<SousCategoryDto>> {
    return getOptionById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionById(params: GetOptionById$Params, context?: HttpContext): Observable<SousCategoryDto> {
    return this.getOptionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SousCategoryDto>): SousCategoryDto => r.body)
    );
  }

  /** Path part for operation `deleteOptionById()` */
  static readonly DeleteOptionByIdPath = '/sous-category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOptionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionById$Response(params: DeleteOptionById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOptionById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOptionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionById(params: DeleteOptionById$Params, context?: HttpContext): Observable<void> {
    return this.deleteOptionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
