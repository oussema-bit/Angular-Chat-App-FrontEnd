/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createForum } from '../fn/forum-controller/create-forum';
import { CreateForum$Params } from '../fn/forum-controller/create-forum';
import { deleteForum } from '../fn/forum-controller/delete-forum';
import { DeleteForum$Params } from '../fn/forum-controller/delete-forum';
import { Forum } from '../models/forum';
import { ForumDto } from '../models/forum-dto';
import { getAllForums } from '../fn/forum-controller/get-all-forums';
import { GetAllForums$Params } from '../fn/forum-controller/get-all-forums';
import { getForumById } from '../fn/forum-controller/get-forum-by-id';
import { GetForumById$Params } from '../fn/forum-controller/get-forum-by-id';
import { updateForum } from '../fn/forum-controller/update-forum';
import { UpdateForum$Params } from '../fn/forum-controller/update-forum';

@Injectable({ providedIn: 'root' })
export class ForumControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateForum()` */
  static readonly UpdateForumPath = '/api/forums/updateForum/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateForum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateForum$Response(params: UpdateForum$Params, context?: HttpContext): Observable<StrictHttpResponse<ForumDto>> {
    return updateForum(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateForum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateForum(params: UpdateForum$Params, context?: HttpContext): Observable<ForumDto> {
    return this.updateForum$Response(params, context).pipe(
      map((r: StrictHttpResponse<ForumDto>): ForumDto => r.body)
    );
  }

  /** Path part for operation `createForum()` */
  static readonly CreateForumPath = '/api/forums/addForum';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createForum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createForum$Response(params: CreateForum$Params, context?: HttpContext): Observable<StrictHttpResponse<ForumDto>> {
    return createForum(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createForum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createForum(params: CreateForum$Params, context?: HttpContext): Observable<ForumDto> {
    return this.createForum$Response(params, context).pipe(
      map((r: StrictHttpResponse<ForumDto>): ForumDto => r.body)
    );
  }

  /** Path part for operation `getForumById()` */
  static readonly GetForumByIdPath = '/api/forums/getForumById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getForumById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getForumById$Response(params: GetForumById$Params, context?: HttpContext): Observable<StrictHttpResponse<Forum>> {
    return getForumById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getForumById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getForumById(params: GetForumById$Params, context?: HttpContext): Observable<Forum> {
    return this.getForumById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Forum>): Forum => r.body)
    );
  }

  /** Path part for operation `getAllForums()` */
  static readonly GetAllForumsPath = '/api/forums/getAllForums';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllForums()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllForums$Response(params?: GetAllForums$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Forum>>> {
    return getAllForums(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllForums$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllForums(params?: GetAllForums$Params, context?: HttpContext): Observable<Array<Forum>> {
    return this.getAllForums$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Forum>>): Array<Forum> => r.body)
    );
  }

  /** Path part for operation `deleteForum()` */
  static readonly DeleteForumPath = '/api/forums/deleteForum/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteForum()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForum$Response(params: DeleteForum$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteForum(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteForum$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForum(params: DeleteForum$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteForum$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
