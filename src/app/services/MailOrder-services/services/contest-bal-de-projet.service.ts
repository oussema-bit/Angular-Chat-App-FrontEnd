/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addContest } from '../fn/contest-bal-de-projet/add-contest';
import { AddContest$Params } from '../fn/contest-bal-de-projet/add-contest';
import { assignProjectToContest } from '../fn/contest-bal-de-projet/assign-project-to-contest';
import { AssignProjectToContest$Params } from '../fn/contest-bal-de-projet/assign-project-to-contest';
import { ContestDto } from '../models/contest-dto';
import { customSaveContest } from '../fn/contest-bal-de-projet/custom-save-contest';
import { CustomSaveContest$Params } from '../fn/contest-bal-de-projet/custom-save-contest';
import { deleteContestById } from '../fn/contest-bal-de-projet/delete-contest-by-id';
import { DeleteContestById$Params } from '../fn/contest-bal-de-projet/delete-contest-by-id';
import { getAllContests } from '../fn/contest-bal-de-projet/get-all-contests';
import { GetAllContests$Params } from '../fn/contest-bal-de-projet/get-all-contests';
import { getContestById } from '../fn/contest-bal-de-projet/get-contest-by-id';
import { GetContestById$Params } from '../fn/contest-bal-de-projet/get-contest-by-id';

@Injectable({ providedIn: 'root' })
export class ContestBalDeProjetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllContests()` */
  static readonly GetAllContestsPath = '/contest-bal-de-projet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllContests()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllContests$Response(params?: GetAllContests$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContestDto>>> {
    return getAllContests(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllContests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllContests(params?: GetAllContests$Params, context?: HttpContext): Observable<Array<ContestDto>> {
    return this.getAllContests$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContestDto>>): Array<ContestDto> => r.body)
    );
  }

  /** Path part for operation `addContest()` */
  static readonly AddContestPath = '/contest-bal-de-projet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addContest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addContest$Response(params: AddContest$Params, context?: HttpContext): Observable<StrictHttpResponse<ContestDto>> {
    return addContest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addContest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addContest(params: AddContest$Params, context?: HttpContext): Observable<ContestDto> {
    return this.addContest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContestDto>): ContestDto => r.body)
    );
  }

  /** Path part for operation `customSaveContest()` */
  static readonly CustomSaveContestPath = '/contest-bal-de-projet/save-contest/{optionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customSaveContest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customSaveContest$Response(params: CustomSaveContest$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return customSaveContest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customSaveContest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customSaveContest(params: CustomSaveContest$Params, context?: HttpContext): Observable<void> {
    return this.customSaveContest$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `assignProjectToContest()` */
  static readonly AssignProjectToContestPath = '/contest-bal-de-projet/assign-project-to-contest/{contestId}/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignProjectToContest()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignProjectToContest$Response(params: AssignProjectToContest$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return assignProjectToContest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `assignProjectToContest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignProjectToContest(params: AssignProjectToContest$Params, context?: HttpContext): Observable<void> {
    return this.assignProjectToContest$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getContestById()` */
  static readonly GetContestByIdPath = '/contest-bal-de-projet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContestById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContestById$Response(params: GetContestById$Params, context?: HttpContext): Observable<StrictHttpResponse<ContestDto>> {
    return getContestById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContestById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContestById(params: GetContestById$Params, context?: HttpContext): Observable<ContestDto> {
    return this.getContestById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContestDto>): ContestDto => r.body)
    );
  }

  /** Path part for operation `deleteContestById()` */
  static readonly DeleteContestByIdPath = '/contest-bal-de-projet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteContestById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContestById$Response(params: DeleteContestById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteContestById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteContestById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContestById(params: DeleteContestById$Params, context?: HttpContext): Observable<void> {
    return this.deleteContestById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
