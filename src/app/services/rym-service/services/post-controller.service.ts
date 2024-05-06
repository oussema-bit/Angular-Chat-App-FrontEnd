/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPost } from '../fn/post-controller/create-post';
import { CreatePost$Params } from '../fn/post-controller/create-post';
import { deletePost } from '../fn/post-controller/delete-post';
import { DeletePost$Params } from '../fn/post-controller/delete-post';
import { dislikePost } from '../fn/post-controller/dislike-post';
import { DislikePost$Params } from '../fn/post-controller/dislike-post';
import { getAllPosts } from '../fn/post-controller/get-all-posts';
import { GetAllPosts$Params } from '../fn/post-controller/get-all-posts';
import { getPinnedPost } from '../fn/post-controller/get-pinned-post';
import { GetPinnedPost$Params } from '../fn/post-controller/get-pinned-post';
import { getPostById } from '../fn/post-controller/get-post-by-id';
import { GetPostById$Params } from '../fn/post-controller/get-post-by-id';
import { likePost } from '../fn/post-controller/like-post';
import { LikePost$Params } from '../fn/post-controller/like-post';
import { pinMostLikedPost } from '../fn/post-controller/pin-most-liked-post';
import { PinMostLikedPost$Params } from '../fn/post-controller/pin-most-liked-post';
import { Post } from '../models/post';
import { PostDto } from '../models/post-dto';
import { sharePostToDiscord } from '../fn/post-controller/share-post-to-discord';
import { SharePostToDiscord$Params } from '../fn/post-controller/share-post-to-discord';
import { updatePost } from '../fn/post-controller/update-post';
import { UpdatePost$Params } from '../fn/post-controller/update-post';
import {Topic} from "../models/topic";

@Injectable({ providedIn: 'root' })
export class PostControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updatePost()` */
  static readonly UpdatePostPath = '/api/forums/topics/posts/updatePost/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost$Response(params: UpdatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
    return updatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePost(params: UpdatePost$Params, context?: HttpContext): Observable<PostDto> {
    return this.updatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostDto>): PostDto => r.body)
    );
  }

  /** Path part for operation `sharePostToDiscord()` */
  static readonly SharePostToDiscordPath = '/api/forums/topics/posts/posts/{postId}/shareToDiscord';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sharePostToDiscord()` instead.
   *
   * This method doesn't expect any request body.
   */
  sharePostToDiscord$Response(params: SharePostToDiscord$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sharePostToDiscord(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sharePostToDiscord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sharePostToDiscord(params: SharePostToDiscord$Params, context?: HttpContext): Observable<void> {
    return this.sharePostToDiscord$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `likePost()` */
  static readonly LikePostPath = '/api/forums/topics/posts/posts/{postId}/like';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `likePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  likePost$Response(params: LikePost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return likePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `likePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  likePost(params: LikePost$Params, context?: HttpContext): Observable<{
}> {
    return this.likePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `dislikePost()` */
  static readonly DislikePostPath = '/api/forums/topics/posts/posts/{postId}/dislike';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dislikePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  dislikePost$Response(params: DislikePost$Params, context?: HttpContext): Observable<StrictHttpResponse<Post>> {
    return dislikePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dislikePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dislikePost(params: DislikePost$Params, context?: HttpContext): Observable<Post> {
    return this.dislikePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Post>): Post => r.body)
    );
  }

  /** Path part for operation `pinMostLikedPost()` */
  static readonly PinMostLikedPostPath = '/api/forums/topics/posts/pinMostLikedPost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pinMostLikedPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  pinMostLikedPost$Response(params?: PinMostLikedPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return pinMostLikedPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pinMostLikedPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pinMostLikedPost(params?: PinMostLikedPost$Params, context?: HttpContext): Observable<{
}> {
    return this.pinMostLikedPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `createPost()` */
  static readonly CreatePostPath = '/api/forums/topics/posts/addPost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost$Response(params: CreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
    return createPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost(params: CreatePost$Params, context?: HttpContext): Observable<PostDto> {
    return this.createPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostDto>): PostDto => r.body)
    );
  }

  /** Path part for operation `getPinnedPost()` */
  static readonly GetPinnedPostPath = '/api/forums/topics/posts/pinned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPinnedPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPinnedPost$Response(params?: GetPinnedPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getPinnedPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPinnedPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPinnedPost(params?: GetPinnedPost$Params, context?: HttpContext): Observable<{
}> {
    return this.getPinnedPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getPostById()` */
  static readonly GetPostByIdPath = '/api/forums/topics/posts/getPostById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById$Response(params: GetPostById$Params, context?: HttpContext): Observable<StrictHttpResponse<Post>> {
    return getPostById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById(params: GetPostById$Params, context?: HttpContext): Observable<Post> {
    return this.getPostById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Post>): Post => r.body)
    );
  }

  /** Path part for operation `getAllPosts()` */
  static readonly GetAllPostsPath = '/api/forums/topics/posts/getAllPosts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPosts$Response(params?: GetAllPosts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Post>>> {
    return getAllPosts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPosts(params?: GetAllPosts$Params, context?: HttpContext): Observable<Array<Post>> {
    return this.getAllPosts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Post>>): Array<Post> => r.body)
    );
  }

  /** Path part for operation `deletePost()` */
  static readonly DeletePostPath = '/api/forums/topics/posts/deletePost/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost$Response(params: DeletePost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deletePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost(params: DeletePost$Params, context?: HttpContext): Observable<{
}> {
    return this.deletePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }


  getAllPostsByTopic(id: number): Observable<any> {
    return this.http.get<Post>(` http://localhost:8083/api/forums/topics/posts/${id}`);

  }

}
