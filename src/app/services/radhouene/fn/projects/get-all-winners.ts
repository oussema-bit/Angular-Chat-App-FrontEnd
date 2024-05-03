/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectsDto } from '../../models/projects-dto';

export interface GetAllWinners$Params {
  b: boolean;
}

export function getAllWinners(http: HttpClient, rootUrl: string, params: GetAllWinners$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectsDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllWinners.PATH, 'get');
  if (params) {
    rb.query('b', params.b, {});
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

getAllWinners.PATH = '/projects/scolar-year';
