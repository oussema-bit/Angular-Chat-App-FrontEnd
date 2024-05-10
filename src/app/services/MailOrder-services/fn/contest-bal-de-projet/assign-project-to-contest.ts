/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AssignProjectToContest$Params {
  projectId: number;
  contestDtoID: number;
}

export function assignProjectToContest(http: HttpClient, rootUrl: string, params: AssignProjectToContest$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, assignProjectToContest.PATH, 'patch');
  if (params) {
    rb.path('projectId', params.projectId, {});
    rb.path('contestDtoID', params.contestDtoID, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

assignProjectToContest.PATH = '/contest-bal-de-projet/assign-project-to-contest/{contestId}/{projectId}';
