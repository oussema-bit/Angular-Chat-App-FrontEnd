/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPost1 } from '../fn/topic-controller/create-post-1';
import { CreatePost1$Params } from '../fn/topic-controller/create-post-1';
import { deleteTopic } from '../fn/topic-controller/delete-topic';
import { DeleteTopic$Params } from '../fn/topic-controller/delete-topic';
import { getAllTopics } from '../fn/topic-controller/get-all-topics';
import { GetAllTopics$Params } from '../fn/topic-controller/get-all-topics';
import { getAllTopicsByForumId } from '../fn/topic-controller/get-all-topics-by-forum-id';
import { GetAllTopicsByForumId$Params } from '../fn/topic-controller/get-all-topics-by-forum-id';
import { getPostById1 } from '../fn/topic-controller/get-post-by-id-1';
import { GetPostById1$Params } from '../fn/topic-controller/get-post-by-id-1';
import { Topic } from '../models/topic';
import { TopicDto } from '../models/topic-dto';
import { updateTopic } from '../fn/topic-controller/update-topic';
import { UpdateTopic$Params } from '../fn/topic-controller/update-topic';

@Injectable({ providedIn: 'root' })
export class TopicControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateTopic()` */
  static readonly UpdateTopicPath = '/api/forums/topics/updateTopic/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTopic()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTopic$Response(params: UpdateTopic$Params, context?: HttpContext): Observable<StrictHttpResponse<TopicDto>> {
    return updateTopic(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTopic$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTopic(params: UpdateTopic$Params, context?: HttpContext): Observable<TopicDto> {
    return this.updateTopic$Response(params, context).pipe(
      map((r: StrictHttpResponse<TopicDto>): TopicDto => r.body)
    );
  }

  /** Path part for operation `createPost1()` */
  static readonly CreatePost1Path = '/api/forums/topics/addTopic';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost1$Response(params: CreatePost1$Params, context?: HttpContext): Observable<StrictHttpResponse<TopicDto>> {
    return createPost1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPost1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost1(params: CreatePost1$Params, context?: HttpContext): Observable<TopicDto> {
    return this.createPost1$Response(params, context).pipe(
      map((r: StrictHttpResponse<TopicDto>): TopicDto => r.body)
    );
  }

  /** Path part for operation `getAllTopicsByForumId()` */
  static readonly GetAllTopicsByForumIdPath = '/api/forums/topics/{forum_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTopicsByForumId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTopicsByForumId$Response(params: GetAllTopicsByForumId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Topic>>> {
    return getAllTopicsByForumId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTopicsByForumId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTopicsByForumId(params: GetAllTopicsByForumId$Params, context?: HttpContext): Observable<Array<Topic>> {
    return this.getAllTopicsByForumId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Topic>>): Array<Topic> => r.body)
    );
  }

  getAllTopicsByForum(id: number): Observable<any> {
    return this.http.get<Topic>(`http://localhost:8083/api/forums/topics/${id}`);
  }



  /** Path part for operation `getPostById1()` */
  static readonly GetPostById1Path = '/api/forums/topics/getTopicById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById1$Response(params: GetPostById1$Params, context?: HttpContext): Observable<StrictHttpResponse<Topic>> {
    return getPostById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById1(params: GetPostById1$Params, context?: HttpContext): Observable<Topic> {
    return this.getPostById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Topic>): Topic => r.body)
    );
  }

  /** Path part for operation `getAllTopics()` */
  static readonly GetAllTopicsPath = '/api/forums/topics/getAllTopics';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTopics()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTopics$Response(params?: GetAllTopics$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Topic>>> {
    return getAllTopics(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTopics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTopics(params?: GetAllTopics$Params, context?: HttpContext): Observable<Array<Topic>> {
    return this.getAllTopics$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Topic>>): Array<Topic> => r.body)
    );
  }

  /** Path part for operation `deleteTopic()` */
  static readonly DeleteTopicPath = '/api/forums/topics/deleteTopic/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTopic()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTopic$Response(params: DeleteTopic$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteTopic(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTopic$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTopic(params: DeleteTopic$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteTopic$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
