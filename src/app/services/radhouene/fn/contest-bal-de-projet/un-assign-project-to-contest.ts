/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface UnAssignProjectToContest$Params {
  contestDtoID: number;
  projectId: number;
}

export function unAssignProjectToContest(http: HttpClient, rootUrl: string, params: UnAssignProjectToContest$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, unAssignProjectToContest.PATH, 'patch');
  if (params) {
    rb.path('contestDtoID', params.contestDtoID, {});
    rb.path('projectId', params.projectId, {});
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

unAssignProjectToContest.PATH = '/contest-bal-de-projet/unassign-project-to-contest/{contestDtoID}/{projectId}';
