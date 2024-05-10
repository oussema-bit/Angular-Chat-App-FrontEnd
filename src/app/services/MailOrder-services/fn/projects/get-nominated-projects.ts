/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectsDto } from '../../models/projects-dto';

export interface GetNominatedProjects$Params {
}

export function getNominatedProjects(http: HttpClient, rootUrl: string, params?: GetNominatedProjects$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectsDto>>> {
  const rb = new RequestBuilder(rootUrl, getNominatedProjects.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProjectsDto>>;
    })
  );
}

getNominatedProjects.PATH = '/projects/nominated';
