/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addOption1 } from '../fn/options/add-option-1';
import { AddOption1$Params } from '../fn/options/add-option-1';
import { deleteOptionById1 } from '../fn/options/delete-option-by-id-1';
import { DeleteOptionById1$Params } from '../fn/options/delete-option-by-id-1';
import { getAllOptions1 } from '../fn/options/get-all-options-1';
import { GetAllOptions1$Params } from '../fn/options/get-all-options-1';
import { getOptionById1 } from '../fn/options/get-option-by-id-1';
import { GetOptionById1$Params } from '../fn/options/get-option-by-id-1';
import { OptionDto } from '../models/option-dto';

@Injectable({ providedIn: 'root' })
export class OptionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllOptions1()` */
  static readonly GetAllOptions1Path = '/options';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllOptions1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOptions1$Response(params?: GetAllOptions1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OptionDto>>> {
    return getAllOptions1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllOptions1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOptions1(params?: GetAllOptions1$Params, context?: HttpContext): Observable<Array<OptionDto>> {
    return this.getAllOptions1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OptionDto>>): Array<OptionDto> => r.body)
    );
  }

  /** Path part for operation `addOption1()` */
  static readonly AddOption1Path = '/options';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOption1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOption1$Response(params: AddOption1$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionDto>> {
    return addOption1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addOption1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addOption1(params: AddOption1$Params, context?: HttpContext): Observable<OptionDto> {
    return this.addOption1$Response(params, context).pipe(
      map((r: StrictHttpResponse<OptionDto>): OptionDto => r.body)
    );
  }

  /** Path part for operation `getOptionById1()` */
  static readonly GetOptionById1Path = '/options/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionById1$Response(params: GetOptionById1$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionDto>> {
    return getOptionById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionById1(params: GetOptionById1$Params, context?: HttpContext): Observable<OptionDto> {
    return this.getOptionById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<OptionDto>): OptionDto => r.body)
    );
  }

  /** Path part for operation `deleteOptionById1()` */
  static readonly DeleteOptionById1Path = '/options/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOptionById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionById1$Response(params: DeleteOptionById1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOptionById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOptionById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOptionById1(params: DeleteOptionById1$Params, context?: HttpContext): Observable<void> {
    return this.deleteOptionById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
