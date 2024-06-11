/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectsDto } from '../../models/projects-dto';

export interface UpdateProject$Params {
  projectId: number;
  optionId: number;
  categoryId: number;
      body: ProjectsDto
}

export function updateProject(http: HttpClient, rootUrl: string, params: UpdateProject$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectsDto>> {
  const rb = new RequestBuilder(rootUrl, updateProject.PATH, 'patch');
  if (params) {
    rb.path('projectId', params.projectId, {});
    rb.path('optionId', params.optionId, {});
    rb.path('categoryId', params.categoryId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProjectsDto>;
    })
  );
}

updateProject.PATH = '/projects/updateProject/{projectId}/{optionId}/{categoryId}';
