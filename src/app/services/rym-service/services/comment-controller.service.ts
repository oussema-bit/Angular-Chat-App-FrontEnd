/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addNestedComment } from '../fn/comment-controller/add-nested-comment';
import { AddNestedComment$Params } from '../fn/comment-controller/add-nested-comment';
import { Comment } from '../models/comment';
import { CommentDto } from '../models/comment-dto';
import { createComment } from '../fn/comment-controller/create-comment';
import { CreateComment$Params } from '../fn/comment-controller/create-comment';
import { deleteComment } from '../fn/comment-controller/delete-comment';
import { DeleteComment$Params } from '../fn/comment-controller/delete-comment';
import { deleteNestedComment } from '../fn/comment-controller/delete-nested-comment';
import { DeleteNestedComment$Params } from '../fn/comment-controller/delete-nested-comment';
import { getAllComments } from '../fn/comment-controller/get-all-comments';
import { GetAllComments$Params } from '../fn/comment-controller/get-all-comments';
import { getCommentById } from '../fn/comment-controller/get-comment-by-id';
import { GetCommentById$Params } from '../fn/comment-controller/get-comment-by-id';
import { getCommentWithNested } from '../fn/comment-controller/get-comment-with-nested';
import { GetCommentWithNested$Params } from '../fn/comment-controller/get-comment-with-nested';
import { updateComment } from '../fn/comment-controller/update-comment';
import { UpdateComment$Params } from '../fn/comment-controller/update-comment';
import { updateNestedComment } from '../fn/comment-controller/update-nested-comment';
import { UpdateNestedComment$Params } from '../fn/comment-controller/update-nested-comment';

@Injectable({ providedIn: 'root' })
export class CommentControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateNestedComment()` */
  static readonly UpdateNestedCommentPath = '/api/forums/topics/posts/comments/updateNestedComment/{parentId}/{nestedId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateNestedComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateNestedComment$Response(params: UpdateNestedComment$Params, context?: HttpContext): Observable<StrictHttpResponse<Comment>> {
    return updateNestedComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateNestedComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateNestedComment(params: UpdateNestedComment$Params, context?: HttpContext): Observable<Comment> {
    return this.updateNestedComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<Comment>): Comment => r.body)
    );
  }

  /** Path part for operation `updateComment()` */
  static readonly UpdateCommentPath = '/api/forums/topics/posts/comments/updateComment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateComment$Response(params: UpdateComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDto>> {
    return updateComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateComment(params: UpdateComment$Params, context?: HttpContext): Observable<CommentDto> {
    return this.updateComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommentDto>): CommentDto => r.body)
    );
  }

  /** Path part for operation `addNestedComment()` */
  static readonly AddNestedCommentPath = '/api/forums/topics/posts/comments/addNestedComment/{parentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addNestedComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addNestedComment$Response(params: AddNestedComment$Params, context?: HttpContext): Observable<StrictHttpResponse<Comment>> {
    return addNestedComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addNestedComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addNestedComment(params: AddNestedComment$Params, context?: HttpContext): Observable<Comment> {
    return this.addNestedComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<Comment>): Comment => r.body)
    );
  }

  /** Path part for operation `createComment()` */
  static readonly CreateCommentPath = '/api/forums/topics/posts/comments/addComment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment$Response(params: CreateComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDto>> {
    return createComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment(params: CreateComment$Params, context?: HttpContext): Observable<CommentDto> {
    return this.createComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommentDto>): CommentDto => r.body)
    );
  }

  /** Path part for operation `getCommentWithNested()` */
  static readonly GetCommentWithNestedPath = '/api/forums/topics/posts/comments/getCommentWithNested/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentWithNested()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentWithNested$Response(params: GetCommentWithNested$Params, context?: HttpContext): Observable<StrictHttpResponse<Comment>> {
    return getCommentWithNested(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentWithNested$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentWithNested(params: GetCommentWithNested$Params, context?: HttpContext): Observable<Comment> {
    return this.getCommentWithNested$Response(params, context).pipe(
      map((r: StrictHttpResponse<Comment>): Comment => r.body)
    );
  }

  /** Path part for operation `getCommentById()` */
  static readonly GetCommentByIdPath = '/api/forums/topics/posts/comments/getCommentById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentById$Response(params: GetCommentById$Params, context?: HttpContext): Observable<StrictHttpResponse<Comment>> {
    return getCommentById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentById(params: GetCommentById$Params, context?: HttpContext): Observable<Comment> {
    return this.getCommentById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Comment>): Comment => r.body)
    );
  }

  /** Path part for operation `getAllComments()` */
  static readonly GetAllCommentsPath = '/api/forums/topics/posts/comments/getAllComments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllComments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComments$Response(params?: GetAllComments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Comment>>> {
    return getAllComments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllComments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComments(params?: GetAllComments$Params, context?: HttpContext): Observable<Array<Comment>> {
    return this.getAllComments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Comment>>): Array<Comment> => r.body)
    );
  }

  /** Path part for operation `deleteNestedComment()` */
  static readonly DeleteNestedCommentPath = '/api/forums/topics/posts/comments/deleteNestedComment/{parentId}/{nestedId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNestedComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNestedComment$Response(params: DeleteNestedComment$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteNestedComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteNestedComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNestedComment(params: DeleteNestedComment$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteNestedComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteComment()` */
  static readonly DeleteCommentPath = '/api/forums/topics/posts/comments/deleteComment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment$Response(params: DeleteComment$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment(params: DeleteComment$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(` http://localhost:8083/api/forums/topics/posts/comments/${postId}`);

  }
}
