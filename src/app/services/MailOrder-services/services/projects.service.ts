/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addProject } from '../fn/projects/add-project';
import { AddProject$Params } from '../fn/projects/add-project';
import { customSave } from '../fn/projects/custom-save';
import { CustomSave$Params } from '../fn/projects/custom-save';
import { deleteProject } from '../fn/projects/delete-project';
import { DeleteProject$Params } from '../fn/projects/delete-project';
import { getAllProjects } from '../fn/projects/get-all-projects';
import { GetAllProjects$Params } from '../fn/projects/get-all-projects';
import { getAllWinners } from '../fn/projects/get-all-winners';
import { GetAllWinners$Params } from '../fn/projects/get-all-winners';
import { getAllWinnersByYear } from '../fn/projects/get-all-winners-by-year';
import { GetAllWinnersByYear$Params } from '../fn/projects/get-all-winners-by-year';
import { getGroupsByWinningSteak } from '../fn/projects/get-groups-by-winning-steak';
import { GetGroupsByWinningSteak$Params } from '../fn/projects/get-groups-by-winning-steak';
import { getNominatedProjects } from '../fn/projects/get-nominated-projects';
import { GetNominatedProjects$Params } from '../fn/projects/get-nominated-projects';
import { getProjectById } from '../fn/projects/get-project-by-id';
import { GetProjectById$Params } from '../fn/projects/get-project-by-id';
import { ProjectsDto } from '../models/projects-dto';

@Injectable({ providedIn: 'root' })
export class ProjectsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllProjects()` */
  static readonly GetAllProjectsPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllProjects()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProjects$Response(params?: GetAllProjects$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectsDto>>> {
    return getAllProjects(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllProjects$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProjects(params?: GetAllProjects$Params, context?: HttpContext): Observable<Array<ProjectsDto>> {
    return this.getAllProjects$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjectsDto>>): Array<ProjectsDto> => r.body)
    );
  }

  /** Path part for operation `addProject()` */
  static readonly AddProjectPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addProject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProject$Response(params: AddProject$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectsDto>> {
    return addProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addProject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProject(params: AddProject$Params, context?: HttpContext): Observable<ProjectsDto> {
    return this.addProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjectsDto>): ProjectsDto => r.body)
    );
  }

  /** Path part for operation `customSave()` */
  static readonly CustomSavePath = '/projects/save-project/{optionId}/{categoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customSave$Response(params: CustomSave$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectsDto>> {
    return customSave(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customSave(params: CustomSave$Params, context?: HttpContext): Observable<ProjectsDto> {
    return this.customSave$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjectsDto>): ProjectsDto => r.body)
    );
  }

  /** Path part for operation `getProjectById()` */
  static readonly GetProjectByIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjectById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectById$Response(params: GetProjectById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectsDto>> {
    return getProjectById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProjectById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectById(params: GetProjectById$Params, context?: HttpContext): Observable<ProjectsDto> {
    return this.getProjectById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjectsDto>): ProjectsDto => r.body)
    );
  }

  /** Path part for operation `deleteProject()` */
  static readonly DeleteProjectPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProject()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProject$Response(params: DeleteProject$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProject(params: DeleteProject$Params, context?: HttpContext): Observable<void> {
    return this.deleteProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllWinners()` */
  static readonly GetAllWinnersPath = '/projects/scolar-year';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllWinners()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllWinners$Response(params?: GetAllWinners$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectsDto>>> {
    return getAllWinners(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllWinners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllWinners(params?: GetAllWinners$Params, context?: HttpContext): Observable<Array<ProjectsDto>> {
    return this.getAllWinners$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjectsDto>>): Array<ProjectsDto> => r.body)
    );
  }

  /** Path part for operation `getAllWinnersByYear()` */
  static readonly GetAllWinnersByYearPath = '/projects/scolar-year/{scolarYear}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllWinnersByYear()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllWinnersByYear$Response(params: GetAllWinnersByYear$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectsDto>>> {
    return getAllWinnersByYear(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllWinnersByYear$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllWinnersByYear(params: GetAllWinnersByYear$Params, context?: HttpContext): Observable<Array<ProjectsDto>> {
    return this.getAllWinnersByYear$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjectsDto>>): Array<ProjectsDto> => r.body)
    );
  }

  /** Path part for operation `getNominatedProjects()` */
  static readonly GetNominatedProjectsPath = '/projects/nominated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNominatedProjects()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNominatedProjects$Response(params?: GetNominatedProjects$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectsDto>>> {
    return getNominatedProjects(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNominatedProjects$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNominatedProjects(params?: GetNominatedProjects$Params, context?: HttpContext): Observable<Array<ProjectsDto>> {
    return this.getNominatedProjects$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjectsDto>>): Array<ProjectsDto> => r.body)
    );
  }

  /** Path part for operation `getGroupsByWinningSteak()` */
  static readonly GetGroupsByWinningSteakPath = '/projects/hall-of-fame-groups/{streakValue}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGroupsByWinningSteak()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupsByWinningSteak$Response(params: GetGroupsByWinningSteak$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getGroupsByWinningSteak(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGroupsByWinningSteak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGroupsByWinningSteak(params: GetGroupsByWinningSteak$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getGroupsByWinningSteak$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

}
