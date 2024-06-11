/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectsDto } from '../../models/projects-dto';

export interface CustomSave$Params {
  optionId: number;
  categoryId: number;
      body: ProjectsDto
}

export function customSave(http: HttpClient, rootUrl: string, params: CustomSave$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectsDto>> {
  const rb = new RequestBuilder(rootUrl, customSave.PATH, 'post');
  if (params) {
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

customSave.PATH = '/projects/save-project/{optionId}/{categoryId}';
